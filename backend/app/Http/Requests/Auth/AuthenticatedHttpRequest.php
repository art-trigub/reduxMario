<?php

declare(strict_types=1);

namespace App\Http\Requests\Auth;

use App\Http\Requests\ApiFormRequest;

final class AuthenticatedHttpRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'login' => 'required|exists:App\Entities\User,login',
            'password' => 'required|string|min:8'
        ];
    }

    public function login(): ?string
    {
        return $this->get('login');
    }

    public function userPassword(): ?string
    {
        return $this->get('password');
    }

    public function messages()
    {
        parent::messages();
        return [
            'login.exists' => "User doesn't exist"
        ];
    }
}
