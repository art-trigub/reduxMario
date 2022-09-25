<?php

declare(strict_types=1);

namespace App\Repositories\User\Criterion;

use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Filter\SQLFilter;


final class DateOfBirthCriterion extends SQLFilter
{


    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {

        if ($targetEntity->getReflectionClass()->name != 'App\Entities\User') {
            return '';
        }

        try {

            $dateStart = $this->getParameter('dateOfBirthStart');
            $dateEnd = $this->getParameter('dateOfBirthEnd');


        } catch (\InvalidArgumentException $e) {
            return '';
        }

        if (empty(str_replace("''","",$dateStart))) {
            return '';
        }

        if (empty(str_replace("''","",$dateEnd))) {
            return '';
        }


        print sprintf('%s.date_of_birth Between  %s and %s', $targetTableAlias, $this->getParameter('dateOfBirthStart'),
            $this->getParameter('dateOfBirthEnd'));
        die;
    }
}
