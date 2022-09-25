<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Contracts\ApiResponse;
use App\Entities\Department;
use App\Entities\Role;
use App\Entities\User;
use App\Entities\Userphone;
use App\Http\Resources\Traits\PresentUserTrait;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Collection;

final class GetUsersResource extends ResourceCollection implements ApiResponse
{

    use PresentUserTrait;

    public function toArray($request): array
    {
        return $this->presentCollectionMain($this->collection);
    }

    public function presentCollectionMain(Collection $collection): array
    {
        return $collection->map(function ($item) {
            return $this->presentUser($item);
        })->toArray();
    }
}
