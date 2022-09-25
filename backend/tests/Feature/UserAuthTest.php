<?php

namespace Tests\Feature;

use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserAuthTest extends TestCase
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

    public function testSuccessLogin()
    {

        $response = $this->json('POST', 'api/v1/auth/login', [
            'login' => 'u.tarantsovak',
            'password' => 'password',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'data' => [
                'token'
            ]
        ]);
    }

    public function testFailLogin()
    {
        $response = $this->json('POST', 'api/v1/auth/login', [
            'login' => 'test@gmail.com11',
            'password' => 'secret1234',
        ]);

        $response->assertStatus(400);

        $this->assertEquals('User doesn\'t exist', $response->json('error.message'));
        $response->assertJsonStructure([
            'error'
        ]);
    }

    public function testCurrentUser()
    {

        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];
        $response = $this->json('GET', 'api/v1/auth/me', [], $headers);
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testGetUserById()
    {
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('GET', 'api/v1/users/get/' . $this->user->getId(), [], $headers);


        $response->assertStatus(200);
    }

    public function testUpdateUser()
    {
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];
        $response = $this->json('PUT', 'api/v1/users/update/', [
            'id' => 1,
            'firstName' => 'Mari79ia',
            'lastName' => 'Tarantsova',
            'login' => 'm.tarantsova',
            'phoneNumber' => '8063-1528689',
            'photo' => null,
            'email' => 'yashuk803@gmail.comm',
            'password' => '1256987',
            'dateOfBirth' => '2020-01-02',
            'dateFired' => '2020-01-02 10:45',
            'dateStart' => '2019-01-02 10:45',
            'role' => [
                'departmentId' => 1,
                'id' => 1,
            ]

        ], $headers);

        $response->assertStatus(200);
    }

    public function testNewUser()
    {
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];
        $response = $this->json('POST', 'api/v1/users/create/', [
            'firstName' => 'Mari79ia',
            'lastName' => 'Tarantsova',
            'login' => 'm.tarantsovkla',
            'phoneNumber' => '8063-1528689',
            'photo' => null,
            'email' => 'yashuk803@gmail.comm',
            'password' => '1256987',
            'dateOfBirth' => '2020-08-27T18:00:00.000Z',
            'dateFired' => '2020-01-02 10:45',
            'dateStart' => '2019-01-02 10:45',
            'phones' => [['phoneExternal' => 212, 'phoneInternal' => 256]],
            'role' => [
                'departmentId' => "",
                'id' => "",
            ]

        ], $headers);


        $response->assertStatus(200);
    }


    public function testIndex()
    {
        entity(\App\Entities\User::class, 20)->create();
        entity(\App\Entities\Userphone::class, 20)->create();
        $token = JWTAuth::fromUser($this->user);
        $headers = ['Authorization' => "Bearer $token"];
        $response = $this->json('GET', 'api/v1/users/', [
           'dateOfBirth' => json_encode(['startDate' => '2007-12-31T22:00:00.000Z', 'endDate' => '2008-02-28T22:00:00.000Z']),
           'page' => '0',
           'perPage' => '5',

        ], $headers);


       $response->assertStatus(200);
    }

    public function tearDown(): void
    {
        parent::tearDown();

        $this->em->getConnection()->rollback();

    }
}
