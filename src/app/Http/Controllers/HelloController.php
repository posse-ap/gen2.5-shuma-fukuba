<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index () {
        return <<< EOF
<h1>Hello controller</h1>
EOF;
    }
}
?>
