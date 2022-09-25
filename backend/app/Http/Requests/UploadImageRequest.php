<?php

namespace App\Http\Requests;



final class UploadImageRequest extends \App\Http\Requests\ApiFormRequest
{
    public function rules(): array
    {
        return [
            'type' => 'required|string',
            'file' => 'required|image'
        ];
    }
}
