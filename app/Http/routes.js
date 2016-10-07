'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.get('/').render('index');
Route.get('/over').render('over');
Route.get('/portfolio').render('portfolio');
Route.get('/contact').as('contact').render('contact');
Route.post('/contact', 'ContactController.versturen');