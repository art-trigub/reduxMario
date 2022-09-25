<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Entities\Role;
use Doctrine\Common\Collections\ArrayCollection;

interface RoleRepository
{
    public function getById(int $id);

    public function getAll(): array;

    public function save(Role $role): Role;
}
