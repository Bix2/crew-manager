<?php

namespace App\Http\Controllers\API;

use App\Framework;
use Illuminate\Http\Request;
use App\Http\Resources\FrameworkResource;
use App\Http\Controllers\Controller;

class FrameworkController extends Controller
{

    public function index()
    {
        return FrameworkResource::collection(Framework::all());
    }
}
