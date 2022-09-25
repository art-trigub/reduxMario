<?php

declare(strict_types=1);

namespace App\Actions\Role;

use Illuminate\Support\Collection;


class GetRoleResponse
{
    private $role;

    public function __construct(Collection $role)
    {
        $this->role = $role;
    }

    public function role(): Collection
    {
        return $this->role;
    }
}
