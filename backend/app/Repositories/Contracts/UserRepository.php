<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Entities\User;
use Doctrine\Common\Collections\Criteria;

interface UserRepository
{
    public function getById(int $id);

    public function search(Criteria $criteria);

    public function getAll():array;

    public function save(User $user): User;

    public function getByLogin(string $login): ?User;

}
