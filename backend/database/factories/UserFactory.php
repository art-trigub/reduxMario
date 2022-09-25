<?php

/** @var \LaravelDoctrine\ORM\Testing\Factory $factory */
use App\Entities\User;
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

$factory->define(User::class, function (Faker $faker) {

    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->firstName,
        'email' => $faker->unique()->safeEmail,
        'phone_number' => $faker->unique()->phoneNumber,
        'role' =>  EntityManager::createQueryBuilder()->select('t')
            ->from(\App\Entities\Role::CLASS, 't')
            ->setMaxResults(1)
            ->setFirstResult(mt_rand(0, 5 - 1))->getQuery()->getSingleResult(),
        'login' => $faker->unique()->word . date("YmdHis"),
        'date_of_birth' => $faker->dateTime,
        'date_start' => $faker->dateTime,
        'created_at' => $faker->dateTime,
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password

    ];
});
