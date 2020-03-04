<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Role;
use App\Framework;

class Developer extends Model
{

    protected $fillable = [ 'first_name', 'last_name', 'role_id']; 

    public function role()
    {
    	return $this->belongsTo(Role::class);
    }

    public function frameworks()
    {
        return $this->belongsToMany(Framework::class, 'developer_framework');
    }
}
