<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Http\Requests\User\UpdateUserHttpRequest;

final class UpdateUserRequest
{
    private $id;
    private $firstName;
    private $lastName;
    private $login;
    private $phoneNumber;
    private $photo;
    private $email;
    private $password;
    private $dateOfBirth;
    private $departmentId;
    private $roleId;
    private $dateFired;
    private $dateStart;
    private $phones;


    /**
     * UpdateUserRequest constructor.
     * @param $id
     * @param $firstName
     * @param $lastName
     * @param $login
     * @param $phoneNumber
     * @param $photo
     * @param $email
     * @param $password
     * @param $dateOfBirth
     * @param $departmentId
     * @param $roleId
     * @param $dateFired
     * @param $dateStart
     * @param $phones
     */
    public function __construct(
        ?int $id,
        string $firstName,
        string $lastName,
        string $login,
        string $phoneNumber,
        $photo,
        string $email,
        string $password,
        $dateOfBirth,
        ?int $departmentId,
        ?int $roleId,
        $dateFired,
        $dateStart,
        $phones
    )
    {
        $this->id = $id;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->login = $login;
        $this->phoneNumber = $phoneNumber;
        $this->photo = $photo;
        $this->email = $email;
        $this->password = $password;
        $this->dateOfBirth = $dateOfBirth;
        $this->departmentId = $departmentId;
        $this->roleId = $roleId;
        $this->dateFired = $dateFired;
        $this->dateStart = $dateStart;
        $this->phones = $phones;
    }


    public static function fromRequest(UpdateUserHttpRequest $request): self
    {
        return new static(
            $request->id(),
            $request->firstName(),
            $request->lastName(),
            $request->login(),
            $request->phoneNumber(),
            $request->photo(),
            $request->email(),
            $request->password(),
            $request->dateOfBirth(),
            $request->departmentId(),
            $request->roleId(),
            $request->dateFired(),
            $request->dateStart(),
            $request->phones()
        );
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return $this->lastName;
    }

    /**
     * @return string
     */
    public function getLogin(): string
    {
        return $this->login;
    }

    /**
     * @return string
     */
    public function getPhoneNumber(): string
    {
        return $this->phoneNumber;
    }

    /**
     * @return mixed
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @return mixed
     */
    public function getDateOfBirth()
    {
        return $this->dateOfBirth;
    }

    /**
     * @return int
     */
    public function getDepartmentId(): ?int
    {
        return $this->departmentId;
    }

    /**
     * @return int
     */
    public function getRoleId(): ?int
    {
        return $this->roleId;
    }

    /**
     * @return mixed
     */
    public function getDateFired()
    {
        return $this->dateFired;
    }

    /**
     * @return mixed
     */
    public function getDateStart()
    {
        return $this->dateStart;
    }

    /**
     * @return mixed
     */
    public function getPhones()
    {
        return $this->phones;
    }

}
