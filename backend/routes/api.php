<?php


use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::group([
        'prefix' => 'auth',
        'namespace' => 'Api\\Auth'
    ], function () {
        Route::post('/login', 'AuthController@login');
        Route::get('/me', 'AuthController@getCurrentUser')->middleware('auth:api');
    });


    Route::group([
        'namespace' => 'Api',
        'middleware' => 'auth:api'
    ], function () {
        Route::group([
            'prefix' => 'users'
        ], function () {
            Route::get('/get/{id}', 'UserController@getUserById');
            Route::put('/update', 'UserController@update');
            Route::post('/create', 'UserController@update');
            Route::get('/', 'UserController@index');
        });

    });

    Route::group([
        'middleware' => 'auth:api',
        'namespace' => 'Api\\',
        'prefix' => '/files',
    ], function () {
        Route::post('/', 'UploadController@store');
    });

    Route::group([
        'middleware' => 'auth:api',
        'namespace' => 'Api\\',
        'prefix' => '/department',
    ], function () {
        Route::get('/all', 'DepartmentController@getDepartment');
        Route::get('/role-department', 'DepartmentController@getRoleDepartment');
    });

    Route::group([
        'middleware' => 'auth:api',
        'namespace' => 'Api\\',
        'prefix' => '/role',
    ], function () {
        Route::get('/all', 'RoleController@getRole');
    });

});




