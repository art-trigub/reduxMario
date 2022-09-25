<?php

declare(strict_types=1);

namespace App\Actions\Auth;

use App\Exceptions\TokenCouldNotCreate;
use App\Exceptions\UnauthenticatedException;


use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


final class AuthenticatedUserAction
{
    public function execute(AuthenticatedUserRequest $request): AuthenticationResponse
    {

        try {
            $token = JWTAuth::attempt([
                'login' => $request->getLogin(),
                'password' =>  $request->getUserPassword() ,
            ]);

            if (!$token) {
                throw new UnauthenticatedException();
            }
        } catch (JWTException $exception) {
            throw new TokenCouldNotCreate();
        }

        return new AuthenticationResponse($token);
    }
}
