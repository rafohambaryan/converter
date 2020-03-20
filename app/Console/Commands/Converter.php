<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use SoapBox\Formatter\Formatter;


class Converter extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'convert:countries {input} {output}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    protected $former;

    public function handle()
    {
        $output = $this->argument('output');
        $input = $this->argument('input');
        $convert = $this->convertFile($input, pathinfo($output, PATHINFO_EXTENSION), $output);
        if ($convert) {
            dd('success');
        }
    }

    protected $format = null;

    public function openFile($path)
    {
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        try {
            $content = File::get($path);
        } catch (\Exception $exception) {
            dd($exception->getMessage());
        }
        switch ($ext) {
            case 'json':
                $this->format = Formatter::make($content, Formatter::JSON);
                break;
            case 'xml':
                $this->format = Formatter::make($content, Formatter::XML);
                break;
            case 'csv':
                $this->format = Formatter::make($content, Formatter::CSV);
                break;
            default:
                dd('undifain format');
        }
        return $this->format->toJson();
    }

    public function convertFile($path, $format, $location)
    {
        $content = $this->openFile($path);
        switch ($format) {
            case 'json':
                $this->format = Formatter::make($content, Formatter::JSON)->toJson();
                break;
            case 'xml':
                $this->format = Formatter::make($content, Formatter::JSON)->toXml();
                break;
            case 'csv':
                $this->format = Formatter::make($content, Formatter::CSV)->toCsv();
                break;
            default:
                return false;
        }
        File::put($location, $this->format);
        return 'ok';
    }
}
