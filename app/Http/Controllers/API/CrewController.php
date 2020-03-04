<?php

namespace App\Http\Controllers\API;

use App\Developer;
use App\Role;
use App\Framework;
use Illuminate\Http\Request;
use App\Http\Resources\DeveloperResource;
use App\Http\Controllers\Controller;

class CrewController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | INDEX
    |--------------------------------------------------------------------------
    */

    public function index()
    {
        return DeveloperResource::collection(Developer::all());
    }

    /*
    |--------------------------------------------------------------------------
    | SHOW
    |--------------------------------------------------------------------------
    */

    public function show($id)
    {
        return new DeveloperResource(Developer::find($id));
    }

    /*
    |--------------------------------------------------------------------------
    | STORE
    |--------------------------------------------------------------------------
    */

    public function store(Request $request)
    {
       
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    public function update(Request $request, $id)
    {
    
    }

    /*
    |--------------------------------------------------------------------------
    | DESTROY
    |--------------------------------------------------------------------------
    */
    public function destroy($id)
    {
        $developer = Developer::find($id);
        $developer->delete();

        return response()->json('successfully deleted');
    }

}
