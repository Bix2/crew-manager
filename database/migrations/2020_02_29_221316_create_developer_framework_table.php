<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeveloperFrameworkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('developer_framework', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('developer_id');
            $table->unsignedBigInteger('framework_id');

            $table->foreign('developer_id')->references('id')->on('developers')->onDelete('cascade');;
            $table->foreign('framework_id')->references('id')->on('frameworks')->onDelete('cascade');;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('developer_framework');
    }
}
