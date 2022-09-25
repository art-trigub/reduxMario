<?php

declare(strict_types=1);

namespace App\Actions\User;

use App\Entities\User;
use App\Entities\Userphone;
use App\Repositories\Contracts\RoleRepository;
use App\Repositories\Contracts\UserPhoneRepository;
use App\Repositories\Contracts\UserRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

final class CreateUserAction
{
    private $userRepository;
    private $roleRepository;
    private $userPhoneRepository;

    public function __construct(UserRepository $userRepository, RoleRepository $roleRepository, UserPhoneRepository $userPhoneRepository)
    {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
        $this->userPhoneRepository = $userPhoneRepository;
    }

    public function execute(UpdateUserRequest $request, User $user): UpdateUserResponse
    {
        $user->setFirstName($request->getFirstName());
        $user->setLastName($request->getLastName());
        $user->setLogin($request->getLogin());
        $user->setEmail($request->getEmail());
        $user->setPhoneNumber($request->getPhoneNumber());
        $user->setPassword(Hash::make($request->getPassword()));

        if(!empty($request->getRoleId())) {
            $user->setRole($this->roleRepository->getById($request->getRoleId()));
        }

        if(!empty($request->getDateOfBirth())) {
            $user->setDateOfBirth(Carbon::parse($request->getDateOfBirth()));
        }


        $user->setDateStart(Carbon::parse($request->getDateStart()));
        if(!empty($request->getDateFired())) {
            $user->setDateFired(Carbon::parse($request->getDateFired()));
        }

        $user->setCreatedAt(Carbon::now());
        $user->setUserCreate(Auth::id());
        $user->setPhoto($request->getPhoto());

        $user = $this->userRepository->save($user);

        if($request->getPhones()) {

            $this->userPhoneRepository->deletePhonesByUserId($user->getId());

            foreach ($request->getPhones() as $item) {
                $userPhones = new Userphone();
                $userPhones->setPhoneExternal($item['phoneExternal']);
                $userPhones->setPhoneInternal($item['phoneInternal']);
                $userPhones->setCreatedAt(Carbon::now());
                $userPhones->setUserCreate(Auth::id());
                $userPhones->setUser($user);
                $this->userPhoneRepository->save($userPhones);
            }
        }



        return new UpdateUserResponse($user);
    }

}
