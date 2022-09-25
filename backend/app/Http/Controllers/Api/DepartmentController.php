<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Actions\Department\GetDepartmentAction;
use App\Actions\Role\GetRoleAction;
use App\Http\Resources\GetDepartmentResource;
use App\Http\Resources\GetRoleResource;
use App\Http\Response\ApiResponse;
use App\Http\Controllers\Controller;

final class DepartmentController extends Controller
{
    private $getDepartmentAction;
    private $getRoleAction;

    public function __construct(
        GetDepartmentAction $getDepartmentAction,
        GetRoleAction $getRoleAction

    )
    {
        $this->getDepartmentAction = $getDepartmentAction;
        $this->getRoleAction = $getRoleAction;
    }

    public function getDepartment():ApiResponse
    {
        $response =  $this->getDepartmentAction->execute();
        return  ApiResponse::success(new GetDepartmentResource($response->department()));
    }

    public function getRoleDepartment()
    {
        $department =  $this->getDepartmentAction->execute();
        $roles =  $this->getRoleAction->execute();

        return  ApiResponse::createCustomResponse([
            'departments' =>
            new GetDepartmentResource($department->department()),
            'roles' =>
            new GetRoleResource($roles->role())
        ]);
    }

}
