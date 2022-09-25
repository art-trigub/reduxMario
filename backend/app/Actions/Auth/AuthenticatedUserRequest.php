<?php

declare(strict_types = 1);

namespace App\Actions\Auth;

use App\Http\Requests\Auth\AuthenticatedHttpRequest;

final class AuthenticatedUserRequest
{
    private $login;
    private $password;

    public function __construct(
        string $login,
        string $password
    ) {
        $this->login = $login;
        $this->password = $password;
    }

    public static function fromRequest(AuthenticatedHttpRequest $request): self
    {

        return new static(
            $request->login(),
            $request->userPassword()
        );
    }

    public function getLogin(): string
    {
        return $this->login;
    }

    public function getUserPassword(): string
    {
        return $this->password;
    }
}
