<?php

declare(strict_types=1);

namespace App\Http\Resources\Traits;

use App\Entities\Department;
use App\Entities\Role;
use App\Entities\Userphone;

trait PresentUserTrait
{
    public function presentUser($item): array
    {
        return [
            'id' => $item->getId(),
            'firstName' => $item->getFirstName(),
            'lastName' => $item->getLastName(),
            'email' => $item->getEmail(),
            'photo' => $item->getPhoto(),
            'password' => $item->getPassword(),
            'login' => $item->getLogin(),
            'phoneNumber' => $item->getPhoneNumber(),
            'role' => $this->presentRole($item->getRole()),
            'dateOfBirth' => $item->getDateOfBirth()->format('Y-m-d H:i:s'),
            'dateStart' => $item->getDateStart()->format('Y-m-d H:i:s'),
            'dateFired' => $item->getDateFired() ? $item->getDateFired()->format('Y-m-d H:i:s') : '',
            'phones' => $this->presentCollection($item->getPhones()),
            'permissions' => $item->getPermissions(),
        ];
    }


    public function presentRole(?Role $role): array
    {
        if(!empty($role)) {
            return [
                'id' => $role->getId(),
                'position' => $role->getName(),
                'departmentId' => $role->getDepartment()->getId(),
                'department' => $role->getDepartment()->getName(),
            ];
        }
        return [
            'id' => '',
            'position' => '',
            'departmentId' => '',
            'department' =>'',
        ];
    }


    public function present(Userphone $userphone): array
    {
        return [
            'id' => $userphone->getId(),
            'phoneInternal' => $userphone->getPhoneInternal(),
            'phoneExternal' => $userphone->getPhoneExternal()
        ];
    }

    public function presentCollection(\Doctrine\Common\Collections\Collection $collection): array
    {
        return $collection
            ->map(function (Userphone $userphone) {
                return $this->present($userphone);
            })
            ->toArray();
    }

}
