<?php

declare(strict_types=1);
namespace App\Actions\User;

use App\Repositories\Contracts\UserRepository;

class GetUserByIdAction
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function execute($id): GetUserByIdResponse
    {
        return new GetUserByIdResponse($this->userRepository->getById($id));
    }
}
