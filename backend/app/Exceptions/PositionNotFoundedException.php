<?php


namespace App\Exceptions;


use App\Contracts\ApiException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;
use Throwable;

class PositionNotFoundedException extends ModelNotFoundException implements ApiException
{
    protected $message = "Position not found.";

    public function __construct($message = "", $code = 0, Throwable $previous = null)
    {
        parent::__construct($this->message, $code, $previous);
    }

    public function getStatus(): int
    {
        return Response::HTTP_NOT_FOUND;
    }

    public function toArray(): array
    {
        return [
            'message' => $this->message
        ];
    }
}
