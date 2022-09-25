<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Entities\User;
use App\Repositories\Contracts\UserRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping;
use Doctrine\ORM\Query;
use Doctrine\ORM\Query\Expr\Join;

use LaravelDoctrine\ORM\Facades\EntityManager;


 class DoctrineUserRepository extends EntityRepository implements UserRepository
{
    const ALIAS = [
        'users' => 'u',
        'roles' => 'r',
        'phones' => 'w',
    ];

    private $queryBuider;

    public function __construct(EntityManagerInterface $em, Mapping\ClassMetadata $class)
    {
        parent::__construct($em, $class);

        $this->queryBuider = $this->createQueryBuilder(self::ALIAS['users']);
    }

    public function getById(int $id)
    {

        return $this->find($id);
    }

    public function getAll(): array
    {

        return $this->findAll();
    }

    public function save(User $user): User
    {
        EntityManager::persist($user);
        EntityManager::flush();

        return $user;
    }

    public function getByLogin(string $login): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.login = :login')
            ->setParameter('login', $login)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function search(Criteria $criteria): Query
    {

        $q = $this->createQueryBuilder(self::ALIAS['users'])
            ->leftJoin('u.role', self::ALIAS['roles'])
            ->addCriteria($criteria);

        return  $q->getQuery();
    }
}
