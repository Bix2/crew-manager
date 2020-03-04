<?php

namespace App\Http\Controllers\API;

use App\Role;
use Illuminate\Http\Request;
use App\Http\Resources\RoleResource;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    
    public function index()
    {
        return RoleResource::collection(Role::all());
    }
}
