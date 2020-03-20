<?php
/**
 * Created by PhpStorm.
 * User: Home
 * Date: 19.03.2020
 * Time: 17:29
 */

namespace App\Services;


use App\Models\Convert;
use App\Models\File;
use App\Request\FileRequest;

class FileServices
{
    private $service;
    private $request;

    public function __construct(ConverterService $service, FileRequest $request)
    {
        $this->service = $service;
        $this->request = $request;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $files = File::all();

        return response()->json([
            "file" => $files
        ], 200);
    }

    /**
     * @param $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create($request)
    {
        $valid = $this->request->validateFile($request);
        if (!$valid) {
            return response()->json(['success' => 'error', 'message' => $valid]);
        }
        $file = $request->file('file');
        $name = time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('uploads'), $name);
        File::create([
            'name' => $name
        ]);
        return response()->json(['success' => 'upload']);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function find($id)
    {
        $file = File::find($id);
        if (!$file) {
            return response()->json(['success' => 'error', 'message' => 'file not fount'], 200);
        }
        $path = public_path('uploads/' . $file->name);
        $content = $this->service->openFile($path);
        return response()->json(['file' => $content, 'format' => pathinfo($path, PATHINFO_EXTENSION)], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleted($id)
    {
        $file = File::find($id);
        if ($file) {
            $file->delete();
        }
        return response()->json(['success' => 'delete'], 200);
    }

    /**
     * @param $data
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($data, $id)
    {
        $path = (File::find($id))->name;
        $this->service->saveFile($path, $data->input('format'), json_encode($data->input('file')));
        return response()->json(['success' => 'save'], 200);
    }

    /**
     * @param $format
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function convert($format, $id)
    {
        $convert = Convert::where('file_id', $id)->where('format', $format)->first();
        if ($convert) {
            return response()->json(['path' => $convert->path], 200);
        }
        $file = File::find($id);
        if (!$file) {
            return response()->json(['success' => 'error', 'messages' => 'file not fount']);
        }
        $conv = $this->service->convertFile(public_path('uploads/' . $file->name), $format);

        Convert::create([
            'file_id' => $id,
            'path' => $conv,
            'format' => $format
        ]);
        return response()->json(['path' => $conv]);
    }
}
