<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Contracts\ApiResponse;
use App\Entities\Department;
use App\Entities\Role;
use App\Entities\Userphone;
use App\Http\Resources\Traits\PresentUserTrait;
use Doctrine\Common\Collections\Collection;
use Illuminate\Http\Resources\Json\JsonResource;

final class UserResource extends JsonResource implements ApiResponse
{
    use PresentUserTrait;
    public function toArray($request): array
    {
        return $this->presentUser($this);

    }

}
