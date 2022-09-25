<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Entities\Department;
use Doctrine\Common\Collections\ArrayCollection;

interface DepartmentRepository
{
    public function getById(int $id);

    public function getAll(): array;

    public function save(Department $department): Department;

}
