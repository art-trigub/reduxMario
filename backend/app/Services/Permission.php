<?php
declare(strict_types=1);
namespace App\Services;

class Permission extends Item
{

    public $type = self::TYPE_PERMISSION;

    public static function className()
    {
        return get_called_class();
    }
}
