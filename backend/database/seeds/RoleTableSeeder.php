<?php

use Illuminate\Database\Seeder;
use LaravelDoctrine\ORM\Facades\EntityManager;

class RoleTableSeeder extends Seeder
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


            $con->insert('roles',
                [
                    'name' => $faker->name,
                    'department_id' => EntityManager::createQueryBuilder()->select('t')
                        ->from(\App\Entities\Department::CLASS, 't')
                        ->setMaxResults(1)
                        ->setFirstResult(mt_rand(0, 8 - 1))
                      ->getQuery()->getSingleResult()->getId(),
                    'auth_item_id' =>  EntityManager::createQueryBuilder()->select('t')
                        ->from(\App\Entities\Authitem::CLASS, 't')
                        ->andWhere('t.name = :name')
                        ->setParameter('name', 'admin')
                        ->setMaxResults(1)
                       ->getQuery()->getSingleResult()->getId(),
                    'created_at' =>date('Y-m-d H:i:s'),
                ]);


        $con->insert('roles',
            [
                'name' => $faker->name,
                'department_id' => EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Department::CLASS, 't')

                    ->setMaxResults(1)
                    ->setFirstResult(mt_rand(0, 8 - 1))
                    ->getQuery()->getSingleResult()->getId(),
                'auth_item_id' =>  EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Authitem::CLASS, 't')
                    ->andWhere('t.name = :name')
                    ->setParameter('name', 'director')
                    ->setMaxResults(1)
                    ->getQuery()->getSingleResult()->getId(),
                'created_at' =>date('Y-m-d H:i:s'),
            ]);


        $con->insert('roles',
            [
                'name' => $faker->name,
                'department_id' => EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Department::CLASS, 't')

                    ->setMaxResults(1)
                    ->setFirstResult(mt_rand(0, 8 - 1))
                    ->getQuery()->getSingleResult()->getId(),
                'auth_item_id' =>  EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Authitem::CLASS, 't')
                    ->andWhere('t.name = :name')
                    ->setParameter('name', 'teamleader')
                    ->setMaxResults(1)
                   ->getQuery()->getSingleResult()->getId(),
                'created_at' =>date('Y-m-d H:i:s'),
            ]);



        $con->insert('roles',
            [
                'name' => $faker->name,
                'department_id' => EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Department::CLASS, 't')
                    ->setMaxResults(1)
                    ->setFirstResult(mt_rand(0, 8 - 1))
                    ->getQuery()->getSingleResult()->getId(),
                'auth_item_id' =>  EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Authitem::CLASS, 't')
                    ->andWhere('t.name = :name')
                    ->setParameter('name', 'agentSale')
                    ->setMaxResults(1)
                    ->getQuery()->getSingleResult()->getId(),
                'created_at' =>date('Y-m-d H:i:s'),
            ]);


        $con->insert('roles',
            [
                'name' => $faker->name,
                'department_id' => EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Department::CLASS, 't')

                    ->setMaxResults(1)
                    ->setFirstResult(mt_rand(0, 8 - 1))
                    ->getQuery()->getSingleResult()->getId(),
                'auth_item_id' =>  EntityManager::createQueryBuilder()->select('t')
                    ->from(\App\Entities\Authitem::CLASS, 't')
                    ->andWhere('t.name = :name')
                    ->setParameter('name', 'agentTechSupport')
                    ->setMaxResults(1)
                 ->getQuery()->getSingleResult()->getId(),
                'created_at' =>date('Y-m-d H:i:s'),
            ]);


    }
}
