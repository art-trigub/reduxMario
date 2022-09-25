<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Repositories\Contracts\UserRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\Query;

final class GetUserCollectionAction
{
    private UserRepository $userRepository;


    public function __construct(UserRepository $userRepository)
    {

        $this->userRepository = $userRepository;
    }

    public function execute(GetUserCollectionRequest $getUserCollectionRequest): Query
    {

        $criteria = Criteria::create();
        $limit =  $getUserCollectionRequest->getPerPage();
        $page = $getUserCollectionRequest->getPage();
        $offset = ($limit * ($page - 1));

        if(!empty($limit) && $limit > 0) {
            $criteria->setMaxResults($limit);
        }

        if(!empty($offset) && $offset > 0) {
            $criteria->setFirstResult($offset);
        }


        if(!empty($getUserCollectionRequest->getSort())) {

            $criteria->orderBy($getUserCollectionRequest->getSort());
        }

        return $this->userRepository->search($criteria);

    }
}
