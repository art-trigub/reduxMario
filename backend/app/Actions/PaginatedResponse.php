<?php

declare(strict_types=1);

namespace App\Actions;



final class PaginatedResponse
{
    private  $paginator;

    public function __construct($paginator)
    {
        $this->paginator = $paginator;
    }

    public function getPaginator()
    {
        return $this->paginator;
    }
}
