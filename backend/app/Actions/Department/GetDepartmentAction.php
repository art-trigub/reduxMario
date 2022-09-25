<?php

declare(strict_types=1);
namespace App\Actions\Department;

use App\Repositories\Contracts\DepartmentRepository;

class GetDepartmentAction
{
    private $departmentRepository;

    public function __construct(DepartmentRepository $departmentRepository)
    {
        $this->departmentRepository = $departmentRepository;
    }

    public function execute(): GetDepartmentResponse
    {
        return new GetDepartmentResponse(collect($this->departmentRepository->getAll()));
    }
}
