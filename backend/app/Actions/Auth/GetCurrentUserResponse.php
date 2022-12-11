<?php

declare(strict_types = 1);

namespace App\Actions\Auth;

use App\Entities\User;

final class GetCurrentUserResponse
{
    private $user;

    public function __construct( $user)
    {
        $this->user = $user;
    }

    public function user()
    {
        return $this->user;
    }
}
