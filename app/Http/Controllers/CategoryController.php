<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index()
    {
        $data = Category::all();
        return Inertia::render('category/index', ['data' => $data]);
    }
    public function create()
    {
        // $data = Category::all();
        return Inertia::render('category/create', []);
    }
}
