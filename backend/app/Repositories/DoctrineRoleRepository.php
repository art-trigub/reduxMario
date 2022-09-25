<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\Role;
use App\Repositories\Contracts\RoleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityRepository;
use LaravelDoctrine\ORM\Facades\EntityManager;

final class DoctrineRoleRepository extends EntityRepository implements RoleRepository
{
    public function getById(int $id)
    {
        return $this->find($id);
    }

    public function getAll(): array
    {
        return $this->findAll();
    }

    public function save(Role $role): Role
    {
        EntityManager::persist($role);
        EntityManager::flush();

        return $role;
    }
}
