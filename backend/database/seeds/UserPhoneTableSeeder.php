<?php

use Illuminate\Database\Seeder;
use LaravelDoctrine\ORM\Facades\EntityManager;

class UserPhoneTableSeeder extends Seeder
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
        $faker = $this->faker;
        $con = $this->entityManager->getConnection();

        $con->insert('userphones',
            [
                'phone_internal' => $faker->unique()->phoneNumber,
                'phone_external' => 221,
                'user_id' =>  EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\User::CLASS, 't')
                    ->setMaxResults(1)
                    ->setFirstResult(mt_rand(0, 20 - 1))->getQuery()->getSingleResult()->getId(),
                'created_at' => date('Y-m-d H:i:s'),
            ]);
    }
}
