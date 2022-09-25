<?php

namespace App\Http\Controllers\Api;

use App\Actions\Department\GetDepartmentAction;
use App\Actions\Upload\UploadImageAction;
use App\Actions\Upload\UploadImageRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\UploadImageRequest as ImageRequest;
use App\Http\Resources\ProfileImageResource;
use App\Http\Response\ApiResponse;
use Illuminate\Support\Facades\Auth;

class UploadController extends Controller
{

    private UploadImageAction $uploadImageAction;

    public function __construct(
        UploadImageAction $uploadImageAction
    ) {

        $this->uploadImageAction = $uploadImageAction;
    }

    public function store(ImageRequest $request)
    {

        $user = Auth::user();
        $type = $request->get('type');

        $response = $this->uploadImageAction->execute(new UploadImageRequest(
            $request->file('file'),
            $user->getAuthIdentifier(),
            $type,
            $user->{$type}()
        ));
        return  ApiResponse::success(new ProfileImageResource($response), [], 201);

    }
}
