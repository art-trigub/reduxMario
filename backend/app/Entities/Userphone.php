<?php

namespace App\Entities;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="userphones")
 */
class Userphone
{
    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getPhoneInternal()
    {
        return $this->phone_internal;
    }

    /**
     * @param mixed $phone_internal
     */
    public function setPhoneInternal($phone_internal): void
    {
        $this->phone_internal = $phone_internal;
    }

    /**
     * @return mixed
     */
    public function getPhoneExternal()
    {
        return $this->phone_external;
    }

    /**
     * @param mixed $phone_external
     */
    public function setPhoneExternal($phone_external): void
    {
        $this->phone_external = $phone_external;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user): void
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at): void
    {
        $this->created_at = $created_at;
    }

    /**
     * @return mixed
     */
    public function getUserCreate()
    {
        return $this->user_create;
    }

    /**
     * @param mixed $user_create
     */
    public function setUserCreate($user_create): void
    {
        $this->user_create = $user_create;
    }

    /**
     * @return mixed
     */
    public function getUpdateAt()
    {
        return $this->update_at;
    }

    /**
     * @param mixed $update_at
     */
    public function setUpdateAt($update_at): void
    {
        $this->update_at = $update_at;
    }

    /**
     * @return mixed
     */
    public function getUserUpdate()
    {
        return $this->user_update;
    }

    /**
     * @param mixed $user_update
     */
    public function setUserUpdate($user_update): void
    {
        $this->user_update = $user_update;
    }

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $phone_internal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $phone_external;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="phones")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $user_create;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $update_at;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $user_update;

    const MNEMO = 'user';
}
