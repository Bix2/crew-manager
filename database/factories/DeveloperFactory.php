<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Developer;
use App\Role;
use Faker\Generator as Faker;

$factory->define(Developer::class, function (Faker $faker) {
    $roleId = Role::all()->pluck('id')->toArray();

    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'role_id' => $faker->randomElement($roleId),
    ];
});
