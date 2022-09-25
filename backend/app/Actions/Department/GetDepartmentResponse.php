<?php

declare(strict_types=1);

namespace App\Actions\Department;

use Illuminate\Support\Collection;


class GetDepartmentResponse
{
    private $department;

    public function __construct(Collection $department)
    {
        $this->department = $department;
    }

    public function department(): Collection
    {
        return $this->department;
    }
}
