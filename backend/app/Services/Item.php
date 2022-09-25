<?php
declare(strict_types=1);

namespace App\Services;


class Item
{
    const TYPE_ROLE = 1;
    const TYPE_PERMISSION = 2;

    /**
     * @var int the type of the item. This should be either [[TYPE_ROLE]] or [[TYPE_PERMISSION]].
     */
    public $type;
    /**
     * @var string the name of the item. This must be globally unique.
     */
    public $name;
    /**
     * @var string the item description
     */
    public $description;

    /**
     * @var int UNIX timestamp representing the item creation time
     */
    public $createdAt;
    /**
     * @var int UNIX timestamp representing the item updating time
     */
    public $updatedAt;


    public function __construct(array $data)
    {
        $this->configure($this, $data);
    }

    public static function className()
    {
        return get_called_class();
    }

    public function configure($object, $properties)
    {

        foreach ($properties as $name => $value) {

            $object->$name = $value;
        }

        return $object;
    }
}
