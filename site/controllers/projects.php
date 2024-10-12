<?php

return function ($kirby) {

    return [
        'message' => 'Hello World from the controller!',
        'notes' => $kirby->collection("notes")
    ];

};
