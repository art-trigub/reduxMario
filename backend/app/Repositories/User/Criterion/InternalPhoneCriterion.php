<?php

declare(strict_types=1);

namespace App\Repositories\User\Criterion;

use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Filter\SQLFilter;


final class InternalPhoneCriterion extends SQLFilter
{


    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {

        if ($targetEntity->getReflectionClass()->name != 'App\Entities\User') {
            return '';
        }

        try {
            $statuses = $this->getParameter('internalPhone');
        } catch (\InvalidArgumentException $e) {
            return '';
        }



        if (empty(str_replace("''","",$statuses))) {
            return '';
        }


        $sql = "
        EXISTS(SELECT *
              FROM userphones p
              WHERE p.user_id = ".$targetTableAlias.".id
                  AND p.phone_internal LIKE ".$this->getParameter('internalPhone')."
             )
        ";
        return $sql;
    }
}
