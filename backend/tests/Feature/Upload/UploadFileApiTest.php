<?php

namespace Tests\Feature\Upload;

use App\Entities\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UploadFileApiTest extends TestCase
{

    private $em;

    protected function setUp(): void
    {
        parent::setUp();
        $this->em = app('em');
        $this->em->getConnection()->beginTransaction();
    }


    public function testUnauthenticated()
    {
        Storage::fake('local');

        $testFile = __DIR__ . '/testFiles/logo.png';
        $type = 'avatar';
        $uploadedFile = new UploadedFile(
            $testFile,
            'avatar.png',
            'image/png',
            null,
            true
        );

        $data = [
            'file' => $uploadedFile,
            'type' => $type
        ];
        $response = $this->json("POST", "/api/v1/files", $data);



        $response->assertStatus(401)
            ->assertHeader('Content-Type', 'application/json')
            ->assertJson(
                [
                    "error" => ["message" => 'Something wrong with email or password']
                ]
            );
    }

    public function testUpload()
    {
        $user = entity(\App\Entities\User::class)->create([
            'login' => 'u.tarantsovak136',
            'email' => 'yashuk777@gmail.com',
            'password' => bcrypt('password')
        ]);


        Storage::fake('local');

        $testFile = __DIR__ . '/testFiles/logo.png';
        $type = 'getPhoto';

        $uploadedFile = new UploadedFile(
            $testFile,
            'avatar.png',
            'image/png',
            null,
            true
        );

        $data = [
            'file' => $uploadedFile,
            'type' => $type
        ];
        $response = $this->actingAs($user)->json("POST", "/api/v1/files", $data);
        $response->assertStatus(201);
       // var_dump($response->getContent());


        // $content = $response->assertStatus(201)
        //     ->assertHeader('Content-Type', 'application/json')
        //     ->assertJsonStructure([
        //         'data' => [
        //             'url'
        //         ]
        //     ])->decodeResponseJson('data');

    }

    public function tearDown(): void
    {
        parent::tearDown();

        $this->em->getConnection()->rollback();

    }
}
