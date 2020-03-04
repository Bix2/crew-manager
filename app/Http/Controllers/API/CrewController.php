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
        $developer = new Developer;
        $developer->first_name = $request->first_name;
        $developer->last_name = $request->last_name;
        $developer->role_id = $request->role_id;
        $frameworks = $request->input('frameworks.*.id');
        $developer->save();
        $developer->frameworks()->attach($frameworks);
       
        return response()->json($developer);
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
