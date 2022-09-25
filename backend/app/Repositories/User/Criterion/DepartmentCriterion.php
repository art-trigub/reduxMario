<?php

declare(strict_types=1);

namespace App\Repositories\User\Criterion;

use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Filter\SQLFilter;


final class DepartmentCriterion extends SQLFilter
{


    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {

        if ($targetEntity->getReflectionClass()->name != 'App\Entities\Role') {
            return '';
        }

        try {
            $statuses = $this->getParameter('department');
        } catch (\InvalidArgumentException $e) {
            return '';
        }

        if (empty(str_replace("''","",$statuses))) {
            return '';
        }


        return $targetTableAlias.'.department_id =' . $this->getParameter('department');
    }
}
