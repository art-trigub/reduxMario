<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\DataTransformer\User\SortDataTransform;

final class GetUserCollectionRequest
{
    private $firstName;
    private $lastName;
    private $page;
    private $perPage;
    private $internalPhone;
    private $email;
    private $dateOfBirth;
    private $roleId;
    private $departmentId;
    private $id;

    public function __construct(
        string $firstName = null,
        string $lastName = null,
        string $internalPhone = null,
        string $email = null,
         $dateOfBirth = null,
        string $roleId = null,
        string $departmentId = null,
        string $sort = null,
        string $page = null,
        string $perPage = null,
        $id = null
    )
    {

        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->page = $page;
        $this->perPage = $perPage;
        $this->internalPhone = $internalPhone;
        $this->dateOfBirth = $dateOfBirth;
        $this->email = $email;
        $this->roleId = $roleId;
        $this->departmentId = $departmentId;
        $this->id = $id;
        $dataTransform = new SortDataTransform();
        $this->sort = $dataTransform->getSortData($sort);

    }

    public function getId()
    {
        return $this->id;
    }

    public function getPage(): ?string
    {
        return $this->page;
    }

    public function getPerPage(): ?string
    {
        return $this->perPage;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function getInternalPhone(): ?string
    {
        return $this->internalPhone;
    }

    public function getEmail(): ?string
    {
        return  $this->email;
    }

    public function getDateOfBirth()
    {
        return $this->dateOfBirth;
    }

    public function getRole()
    {
        return $this->roleId;
    }

    public function getDepartment(): ?string
    {
        return $this->departmentId;
    }

    public function getSort(): ?array
    {
        return  $this->sort;
    }
}
