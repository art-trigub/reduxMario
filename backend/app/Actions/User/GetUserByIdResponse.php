<?php

declare(strict_types=1);
namespace App\Actions\User;

use App\Entities\User;

class GetUserByIdResponse
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getUser(): User
    {
        return $this->user;
    }
}
