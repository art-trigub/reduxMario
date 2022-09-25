<?php
declare(strict_types=1);

namespace App\Services;

use LaravelDoctrine\ORM\Facades\EntityManager;

class DbManager implements ManagerInterface
{

    private $queryBuilder;

    public function __construct()
    {
        $this->queryBuilder = EntityManager::createQueryBuilder();
    }


    public function getPermissionsByRoleName($roleName)
    {
        if ($this->isEmptyRoleName($roleName)) {
            return [];
        }

        return $this->getInheritedPermissionsByRole($roleName);
    }


    protected function isEmptyRoleName($roleName)
    {
        return !isset($roleName) || $roleName === '';
    }

    protected function populateItem($row)
    {
        $class = $row['type'] == Item::TYPE_PERMISSION ? Permission::className() : Role::className();

        return new $class([
            'name' => $row['name'],
            'type' => $row['type'],
            'description' => $row['description'],
            'createdAt' => $row['created_at'],
            'updatedAt' => $row['update_at'],
        ]);
    }

    protected function getInheritedPermissionsByRole($roleName)
    {

        $childrenList = $this->getChildrenList();
        $result = [];

        $this->getChildrenRecursive($roleName, $childrenList, $result);

        if (empty($result)) {
            return [];
        }

        $query = $this->queryBuilder->select('ai')->from(\App\Entities\Authitem::CLASS, 'ai')
            ->where('ai.type = :type')
            ->andWhere('ai.name IN (:name)')
            ->setParameters(['type' => Item::TYPE_PERMISSION, 'name'=> array_keys($result)]);

        $permissions = [];
        foreach ($query->getQuery()->getArrayResult() as $row) {

            $permissions[$row['name']] = $this->populateItem($row);
        }

        return $permissions;
    }

    protected function getChildrenRecursive($name, $childrenList, &$result)
    {
        if (isset($childrenList[$name])) {
            foreach ($childrenList[$name] as $child) {
                $result[$child] = true;
                $this->getChildrenRecursive($child, $childrenList, $result);
            }
        }
    }

    protected function getChildrenList()
    {
        $query = $this->queryBuilder->select('aic')->from(\App\Entities\Authitemchild::CLASS, 'aic');

        $parents = [];
        foreach ($query->getQuery()->getArrayResult() as $row) {
            $parents[$row['parent']][] = $row['child'];
        }

        return $parents;
    }
}
