<?php

declare(strict_types=1);

namespace App\DataTransformer\User;

use App\Repositories\DoctrineUserRepository;

final class SortDataTransform
{

    const arrayData = [
        'firstName' => 'first_name',
        'lastName' => 'last_name',
        'email' => 'email',
        'dateOfBirth' => 'date_of_birth',
        'role' => 'role',
        'department' => 'department',
        'id' => 'id',
    ];

    /**
     * SortDataTransform constructor.
     * @param $firstName
     */
    public function getSortData(string $sort = null): ?array
    {
        if(!empty($sort))    {

            $sort = \json_decode($sort);

            if(!empty($sort)) {
                foreach ($sort as $key => $item) {
                    if(array_key_exists($key, self::arrayData)) {
                        return $this->getAlias(self::arrayData[$key], $item);
                    }
                }
            }
        }
        return null;
    }

    private function getAlias(string $value, string $direction)
    {
       $alias = DoctrineUserRepository::ALIAS;
       $sort = null;

       if(property_exists('App\Entities\User', $value)) {
           $sort = $alias['users'];
       }

        if(property_exists('App\Entities\Role', $value)) {
            $sort = $alias['roles'];
        }

        if(strtolower($direction) != 'asc' && strtolower($direction) != 'desc') {
            return null;
        }

        if(!empty($sort)) {
            return [$sort . '.' . $value => $direction];
        }

        return null;

    }
}
