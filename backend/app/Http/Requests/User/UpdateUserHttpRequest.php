<?php

declare(strict_types=1);

namespace App\Http\Requests\User;

use App\Http\Requests\ApiFormRequest;

final class UpdateUserHttpRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'id' => 'nullable|integer',
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'login' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:255',
            'email' => 'required|email',
            'password'=> 'required|string',
            'phones'=> 'array|nullable',
            'dateOfBirth'=> 'required',
            'role.departmentId'=> 'nullable|integer',
            'role.id'=> 'nullable|integer',
        ];
    }

    public function id(): ?int
    {
        return $this->get('id');
    }

    public function firstName(): string
    {
        return $this->get('firstName');
    }

    public function lastName(): string
    {
        return $this->get('lastName');
    }

    public function login(): string
    {
        return $this->get('login');
    }

    public function phoneNumber(): string
    {
        return $this->get('phoneNumber');
    }

    public function photo()
    {

        return $this->get('photo');
    }

    public function email(): string
    {
        return $this->get('email');
    }

    public function password(): string
    {
        return $this->get('password');
    }

    public function dateOfBirth()
    {
        return $this->get('dateOfBirth');
    }

    public function departmentId(): ?int
    {
        return $this->get('role')['departmentId'];
    }

    public function roleId(): ?int
    {
        return $this->get('role')['id'];
    }

    public function dateFired()
    {
        return $this->get('dateFired');
    }

    public function dateStart()
    {
        return $this->get('dateStart');
    }

    public function phones()
    {
        return $this->get('phones');
    }

    public function messages()
    {
        parent::messages();
        return [
            'login.exists' => "User doesn't exist"
        ];
    }
}
