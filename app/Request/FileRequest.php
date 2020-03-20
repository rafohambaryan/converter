<?php
/**
 * Created by PhpStorm.
 * User: Home
 * Date: 20.03.2020
 * Time: 11:29
 */

namespace App\Request;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FileRequest extends Request
{
    public function validateFile($data)
    {
        $test = Validator::make($data->all(), [
            'file' => 'mimes:json,csv'
        ]);
        if ($test->fails()) {
            return $test->errors();
        }
        return false;
    }

}
