<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Developer;

class Role extends Model
{
    protected $fillable = ['title'];

    public function developers()
    {
    	return $this->hasMany(Developer::class);
    }

}

