<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Entities\Userphone;
use Doctrine\Common\Collections\ArrayCollection;

interface UserPhoneRepository
{
    public function getById(int $id): ?Userphone;

    public function getAll(): array;

    public function save(Userphone $userPhone): Userphone;

    public function deletePhonesByUserId(int $userId): void;

}
