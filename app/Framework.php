<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Developer;

class Framework extends Model
{
    protected $fillable = [
        'title'
    ];

    public function developers()
    {
        return $this->belongsToMany(Developer::class, 'developer_framework');

    }
}
