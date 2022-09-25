<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Contracts\ApiResponse;
use App\Entities\Department;
use App\Entities\Role;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

final class GetRoleResource extends ResourceCollection implements ApiResponse
{

    public function toArray($request): array
    {
        return $this->presentCollectionRole($this->collection);
    }

    public function presentRole(Role $item)
    {
        return [
            'id' => $item->getId(),
            'name' => $item->getName(),
            'departmentId' => $item->getDepartment()->getId(),
        ];
    }

    public function presentCollectionRole(Collection $collection): array
    {
        return $collection->map(function ($item) {
            return $this->presentRole($item);
        })->toArray();
    }
}
