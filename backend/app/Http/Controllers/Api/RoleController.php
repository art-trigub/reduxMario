<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\Department\GetDepartmentAction;
use App\Actions\Role\GetRoleAction;
use App\Actions\User\CreateUserAction;
use App\Actions\User\GetUserByIdAction;
use App\Actions\User\GetUsersAction;
use App\Actions\User\UpdateUserAction;
use App\Actions\User\UpdateUserRequest;
use App\Http\Requests\User\UpdateUserHttpRequest;
use App\Http\Resources\GetRoleResource;
use App\Http\Resources\GetUsersResource;
use App\Http\Resources\UserResource;
use App\Http\Response\ApiResponse;
use App\Http\Controllers\Controller;

final class RoleController extends Controller
{
    private $getRoleAction;

    public function __construct(
        GetRoleAction $getRoleAction

    )
    {
        $this->getRoleAction = $getRoleAction;
    }

    public function getRole():ApiResponse
    {
        $response =  $this->getRoleAction->execute();
        return  ApiResponse::success(new GetRoleResource($response->role()));
    }

}
