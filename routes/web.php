<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

Route::resource('posts', PostController::class)->middleware(['auth:sanctum', 'verified']);

// resource manual
Route::get('/category', [CategoryController::class, 'index'])->name('category.index')->middleware(['auth:sanctum', 'verified']);
Route::get('/category/create', [CategoryController::class, 'create'])->name('category.create')->middleware(['auth:sanctum', 'verified']);