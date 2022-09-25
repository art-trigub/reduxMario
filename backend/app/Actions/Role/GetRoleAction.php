<?php

declare(strict_types=1);
namespace App\Actions\Role;

use App\Repositories\Contracts\RoleRepository;

class GetRoleAction
{
    private $roleRepository;

    public function __construct(RoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    public function execute(): GetRoleResponse
    {
        return new GetRoleResponse(collect($this->roleRepository->getAll()));
    }
}
