<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {
    Route::group([
        'prefix' => 'auth',
        'namespace' => 'Api\\Auth'
    ], function () {
        Route::post('/login', 'AuthController@login');
        Route::get('/me', 'AuthController@getCurrentUser')->middleware('auth:api');

    });

});

