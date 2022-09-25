<?php
declare(strict_types=1);
namespace App\Services;

interface ManagerInterface
{
    public function getPermissionsByRoleName($roleName);
}
