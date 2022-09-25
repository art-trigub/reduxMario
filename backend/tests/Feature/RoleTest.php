<?php
namespace Tests\Feature;

use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class RoleTest extends TestCase
{

    private $em;
    private $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->em = app('em');
        $this->em->getConnection()->beginTransaction();

        $this->user = entity(\App\Entities\User::class)->create([
            'login' => 'u.tarantsovak',
            'email' => 'yashuk777@gmail.com',
            'password' => bcrypt('password')
        ]);
    }

    public function testRole()
    {
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('GET', 'api/v1/role/all/',[], $headers);

        $response->assertStatus(200);
    }


    public function tearDown(): void
    {
        parent::tearDown();

        $this->em->getConnection()->rollback();

    }
}
