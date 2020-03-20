<?php
/**
 * Created by PhpStorm.
 * User: Home
 * Date: 20.03.2020
 * Time: 11:25
 */

namespace App\Services;


use SoapBox\Formatter\Formatter;
use Illuminate\Support\Facades\File;

class ConverterService
{
    private $format = null;

    public function openFile($path)
    {
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        $content = File::get($path);
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
        }
        return $this->format->toJson();
    }

    public function saveFile($path, $format, $content)
    {
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
        }
        File::put(public_path('uploads/' . $path), $this->format);
    }

    public function convertFile($path, $format)
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
        $newPath = '/convert/' . time() . '.' . $format;
        File::put(public_path($newPath), $this->format);
        return $newPath;
    }

}
