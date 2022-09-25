<?php

/** @var \LaravelDoctrine\ORM\Testing\Factory $factory */
use Faker\Generator as Faker;
use LaravelDoctrine\ORM\Facades\EntityManager;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\Entities\Role::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'created_at' => $faker->dateTime,
    ];
});
