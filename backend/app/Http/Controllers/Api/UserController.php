<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\Department\GetDepartmentAction;
use App\Actions\Role\GetRoleAction;
use App\Http\Requests\User\UpdateUserHttpRequest;
use App\Http\Resources\GetDepartmentResource;
use App\Http\Resources\GetRoleResource;
use App\Http\Resources\GetUsersResource;
use App\Http\Resources\UserResource;
use App\Http\Response\ApiResponse;
use App\Http\Controllers\Controller;
use App\Services\User\UserService;
use Illuminate\Http\Request;

final class UserController extends Controller
{
    private $roleAction;
    private $getDepartmentAction;
    private $userService;

    public function __construct(
        UserService $userService,
        GetRoleAction $roleAction,
        GetDepartmentAction $getDepartmentAction
    )
    {
        $this->roleAction = $roleAction;
        $this->getDepartmentAction = $getDepartmentAction;
        $this->userService = $userService;
    }

    public function getUserById(int $id): ApiResponse
    {
        $request = request()->merge(['id' => $id]);

        return  ApiResponse::success(new UserResource($this->userService->getOneResultOrFail($request)));
    }

    public function update(UpdateUserHttpRequest $request): ApiResponse
    {
        $role = $this->roleAction->execute();
        $department = $this->getDepartmentAction->execute();
        return ApiResponse::success(new UserResource($this->userService->set($request)),
            [
                'departments' => new GetDepartmentResource($department->department()),
                'roles' => new GetRoleResource($role->role())
            ]);
    }

    public function index(Request $request)
    {
        return ApiResponse::createPaginatedResponse(new GetUsersResource(collect($this->userService->getCollections($request))));
    }
}
