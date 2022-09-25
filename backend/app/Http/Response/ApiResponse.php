<?php

declare(strict_types=1);

namespace App\Http\Response;

use App\Contracts\ApiException as ApiExceptionContract;
use App\Contracts\ApiResponse as ApiResponseContract;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;


final class ApiResponse extends JsonResponse
{
    public static function success(ApiResponseContract $response, array $meta = [], $status = 200): self
    {

        return new static([
            'data' => $response,
            'meta' => $meta
        ], $status);
    }

    public static function emptySuccess(): self
    {
        return new static();
    }

    public static function error(ApiExceptionContract $exception): self
    {
        return new static([
            'error' => $exception->toArray()
        ], $exception->getStatus());
    }

    public static function createCustomResponse(array $data, int $status = JsonResponse::HTTP_OK): JsonResponse
    {
        return new static([
            'data' => $data
        ], $status);
    }

    public static function createPaginatedResponse(ApiResponseContract $data)
    {

        return new static([
            'data' => $data,
            'meta' => ''
        ]);
    }
}
