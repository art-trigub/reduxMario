<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Contracts\ApiResponse;
use App\Entities\Department;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

final class GetDepartmentResource extends ResourceCollection implements ApiResponse
{

    public function toArray($request): array
    {
        return $this->presentCollectionDepartment($this->collection);
    }

    public function presentDepartment(Department $item)
    {
        return [
            'id' => $item->getId(),
            'name' => $item->getName()
        ];
    }

    public function presentCollectionDepartment(Collection $collection): array
    {
        return $collection->map(function ($item) {
            return $this->presentDepartment($item);
        })->toArray();
    }
}
