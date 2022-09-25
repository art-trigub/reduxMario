<?php
namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class DepartmentTest extends TestCase
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

    public function testDepartment()
    {
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('GET', 'api/v1/department/all/',[], $headers);


        $response->assertStatus(200);
    }

    public function testDepartmentRole()
    {
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('GET', 'api/v1/department/role-department/',[], $headers);

        $response->assertStatus(200);
    }

    public function tearDown(): void
    {
        parent::tearDown();

        $this->em->getConnection()->rollback();

    }
}
