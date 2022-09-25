<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\Userphone;
use App\Repositories\Contracts\UserPhoneRepository;
use Doctrine\Common\Collections\ArrayCollection;

use Doctrine\ORM\EntityRepository;
use LaravelDoctrine\ORM\Facades\EntityManager;

final class DoctrineUserPhoneRepository extends EntityRepository implements UserPhoneRepository
{
    public function getById(int $id): Userphone
    {
        return $this->createQueryBuilder('up')
            ->andWhere('up.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getAll(): array
    {
        return $this->getAll();
    }

    public function getByUserId($userId)
    {
        return $this->findBy(['user' => $userId]);
    }

    public function save(Userphone $userphone): Userphone
    {
        EntityManager::persist($userphone);
        EntityManager::flush();

        return $userphone;
    }


    public function deletePhonesByUserId(int $userId): void
    {
        $getAllUserPhone = $this->getByUserId($userId);

        foreach ($getAllUserPhone as $item) {
            EntityManager::remove($item);
        }

        EntityManager::flush();
    }
}
