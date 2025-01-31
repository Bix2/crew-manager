<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Developer;
use App\Http\Resources\FrameworkResource;

class DeveloperResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'last_name'=> $this->last_name,
            'first_name' => $this->first_name,
            'role' => $this->role,
            'frameworks' => FrameworkResource::collection($this->frameworks),
        ];
    }
}
