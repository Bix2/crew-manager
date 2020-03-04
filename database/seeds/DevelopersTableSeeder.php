<?php

use Illuminate\Database\Seeder;
use App\Developer;
use App\Framework;

class DevelopersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $frameworks = Framework::all();

        factory(Developer::class, 5)->create()->each(function ($developer) use ($frameworks) { 
            $developer->frameworks()->attach(
                $frameworks->random(rand(1, 3))->pluck('id')->toArray()
            ); 
        });
    }
}
