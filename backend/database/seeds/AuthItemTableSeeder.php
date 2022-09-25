<?php

use Illuminate\Database\Seeder;
use LaravelDoctrine\ORM\Facades\EntityManager;

class AuthItemTableSeeder extends Seeder
{

    private $entityManager;

    public function __construct(\Doctrine\ORM\EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $con = $this->entityManager->getConnection();

        $con->insert('auth_item',
            [
                'name' => 'admin',
                'type' => '1',
                'description' => 'admin',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

        $con->insert('auth_item',
            [
                'name' => 'teamleader',
                'type' => '1',
                'description' => 'teamleader',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

        $con->insert('auth_item',
            [
                'name' => 'agent',
                'type' => '1',
                'description' => 'agent',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);


        $con->insert('auth_item',
            [
                'name' => 'agentSale',
                'type' => '1',
                'description' => 'agentSale',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

        $con->insert('auth_item',
            [
                'name' => 'agentTechSupport',
                'type' => '1',
                'description' => 'agentTechSupport',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

        $con->insert('auth_item',
            [
                'name' => 'director',
                'type' => '1',
                'description' => 'director',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

       $con->insert('auth_item',
            [
                'name' => 'deleteUser',
                'type' => '2',
                'description' => 'deleteUser',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

        $con->insert('auth_item',
            [
                'name' => 'addUser',
                'type' => '2',
                'description' => 'addUser',
                'created_at' =>date('Y-m-d H:i:s'),
            ]);

        $con->insert('auth_item_child',
            [
                'parent' => 'admin',
                'child' => 'director',
            ]);

        $con->insert('auth_item_child',
            [
                'parent' => 'admin',
                'child' => 'deleteUser',
            ]);

        $con->insert('auth_item_child',
            [
                'parent' => 'director',
                'child' => 'addUser',
            ]);
    }
}
