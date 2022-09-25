<?php

use App\Entities\User;
use Illuminate\Database\Seeder;
use LaravelDoctrine\ORM\Facades\EntityManager;
use \LaravelDoctrine\ORM\Testing;

class UsersTableSeeder extends Seeder
{

    private $entityManager;
    private $faker;

    public function __construct(\Doctrine\ORM\EntityManager $entityManager, Faker\Generator $faker)
    {
        $this->entityManager = $entityManager;
        $this->faker = $faker;
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        entity(\App\Entities\User::class, 20)->create();
    }
}
