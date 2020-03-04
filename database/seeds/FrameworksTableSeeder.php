<?php

use Illuminate\Database\Seeder;
use App\Framework;

class FrameworksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Framework::create([
            'title' => 'Vue',
        ]);

        Framework::create([
            'title' => 'React',
        ]);

        Framework::create([
            'title' => 'Ember',
        ]);

        Framework::create([
            'title' => 'Laravel',
        ]);

        Framework::create([
            'title' => 'Angular',
        ]);
    }
}
