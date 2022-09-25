<?php

namespace App\Providers;

use App\Contracts\FileUploader;
use App\Entities\Department;
use App\Entities\Role;
use App\Entities\User;
use App\Entities\Userphone;
use App\Repositories\Contracts\DepartmentRepository;
use App\Repositories\Contracts\RoleRepository;
use App\Repositories\Contracts\UserPhoneRepository;
use App\Repositories\Contracts\UserRepository;
use App\Repositories\DoctrineDepartmentRepository;
use App\Repositories\DoctrineRoleRepository;
use App\Repositories\DoctrineUserPhoneRepository;
use App\Repositories\DoctrineUserRepository;
use App\Services\ImageUploader;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(FileUploader::class, ImageUploader::class);

        $this->app->bind(UserRepository::class, function($app) {
            return new DoctrineUserRepository(
                $app['em'],
                $app['em']->getClassMetaData(User::class)
            );
        });
        $this->app->bind(RoleRepository::class, function($app) {
            return new DoctrineRoleRepository(
                $app['em'],
                $app['em']->getClassMetaData(Role::class)
            );
        });

        $this->app->bind(DepartmentRepository::class, function($app) {
            return new DoctrineDepartmentRepository(
                $app['em'],
                $app['em']->getClassMetaData(Department::class)
            );
        });


        $this->app->bind(UserPhoneRepository::class, function($app) {
            return new DoctrineUserPhoneRepository(
                $app['em'],
                $app['em']->getClassMetaData(Userphone::class)
            );
        });


    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
