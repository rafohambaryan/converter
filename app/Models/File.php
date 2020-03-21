<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'name'
    ];

    public function getConvert()
    {
        return $this->hasMany(Convert::class, 'file_id', 'id');
    }
}
