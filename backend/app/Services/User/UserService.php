<?php
declare(strict_types=1);

namespace App\Services\User;

use App\Actions\User\CreateUserAction;
use App\Actions\User\GetUserCollectionAction;
use App\Actions\User\GetUserCollectionRequest;
use App\Actions\User\UpdateUserRequest;
use App\Entities\User;
use App\Http\Requests\User\UpdateUserHttpRequest;
use Doctrine\DBAL\Connection;
use Doctrine\ORM\NoResultException;
use Doctrine\ORM\Query;
use Illuminate\Http\Request;
use LaravelDoctrine\ORM\Facades\EntityManager;

final class UserService
{
    private $createUserAction;
    private $getUserCollectionAction;

    public function __construct(
        CreateUserAction $createUserAction,
        GetUserCollectionAction $getUserCollectionAction
    )
    {
        $this->createUserAction = $createUserAction;
        $this->getUserCollectionAction = $getUserCollectionAction;

    }

    public function set(UpdateUserHttpRequest $request)
    {

        if($request->get('id')) {
            $user = $this->getOneResultOrFail($request);
        } else {
            $user = new User();
        }
        $response = $this->createUserAction->execute(UpdateUserRequest::fromRequest($request),
            $user);

        return $response->user();
    }

    private function collect(Request $request): Query
    {

       $data = new GetUserCollectionRequest(
            $request->get('firstName'),
            $request->get('lastName'),
            $request->get('externalNumber'),
            $request->get('email'),
            $request->get('dateOfBirth'),
            $request->get('roleId'),
            $request->get('departmentId'),
            $request->get('sortData'),
            $request->get('page'),
            $request->get('perPage'),
            $request->get('id')
        );


       $filterArray = [
           'lastName' => ['a' => 'LastName', 'str' => '%S%'],
           'firstName' => ['a' => 'FirstName', 'str' => '%S%'],
           'email' => ['a'=>'Email','str'=>'%S%'],
           'dateOfBirth' => 'DateOfBirth',
           'internalPhone' => ['a' => 'InternalPhone', 'str' => '%S%'],
           'role' => 'Role',
           'department' => 'Department',
       ];

       if($data->getId()){
           $filters = EntityManager::getFilters()->enable('userId');
           $filters->setParameter('userId', $data->getId());
       }else{
           foreach ($filterArray as $key => $item) {

               if(isset($item['str'])){
                   $prop = 'get'. $item['a'];
                   if(!empty($data->$prop())) {
                       $val = str_replace("S",$data->$prop(),$item['str']);
                   } else {
                       $val = $data->$prop();
                   }
               }
               else {
                   $prop = 'get'. $item;
                   $val = $data->$prop();
               }

               $filters = EntityManager::getFilters()->enable($key);


               if($key == "dateOfBirth" &&  !empty($val) && is_array($val=json_decode($val,true))
                   && array_key_exists('startDate', $val)
                   && array_key_exists('endDate', $val)
                ) {
                   $filters->setParameter('dateOfBirthStart', $val['startDate']);
                   $filters->setParameter('dateOfBirthEnd', $val['endDate']);
               } else {
                   $filters->setParameter($key, $val);
               }

           }
       }



        return $this->getUserCollectionAction->execute($data);
    }


    public function getOneResultOrFail(Request $request)
    {
        try{
            return $this->getOneResultOrNull($request);
        }catch (NoResultException $exception) {
            throw new NoResultException();
        }
    }

    public function getOneResultOrNull(Request $request)
    {

        return $this->collect($request)->getSingleResult(1);
    }

    public function getCollections(Request $request)
    {

        return $this->collect($request)->getResult();
    }

}
