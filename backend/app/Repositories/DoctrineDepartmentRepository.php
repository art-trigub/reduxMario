<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\Department;
use App\Repositories\Contracts\DepartmentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping;
use LaravelDoctrine\ORM\Facades\EntityManager;

final class DoctrineDepartmentRepository extends EntityRepository implements DepartmentRepository
{

    public function getById(int $id)
    {
        return $this->find($id);
    }

    public function getAll(): array
    {
        return $this->findAll();
    }

    public function save(Department $department): Department
    {
        EntityManager::persist($department);
        EntityManager::flush();

        return $department;

    }

}
