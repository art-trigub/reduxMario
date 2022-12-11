<?php

namespace Database\Seeders;

use App\Entities\User;
use Illuminate\Database\Seeder;

class DefaultUserAndWebsiteSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Binary Academy',
            'email' => 'info11@metrica.fun',
            'email_verified_at' => time(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);

    }
}
