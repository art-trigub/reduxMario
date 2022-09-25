<?php

declare(strict_types=1);

namespace App\Repositories\User\Criterion;

use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Filter\SQLFilter;


final class LastNameCriterion extends SQLFilter
{


    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {

        if ($targetEntity->getReflectionClass()->name != 'App\Entities\User') {
            return '';
        }

        try {
            $statuses = $this->getParameter('lastName');
        } catch (\InvalidArgumentException $e) {
            return '';
        }

        if (empty(str_replace("''","",$statuses))) {
            return '';
        }



        return sprintf('%s.last_name LIKE  %s', $targetTableAlias, $this->getParameter('lastName'));
    }
}
