'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('pages/home')
Route.get('/', 'PageController.home')

//Authentication
Route.get('/register', 'AuthController.register')
Route.post('/register', 'AuthController.storeUser')
Route.get('/login', 'AuthController.login')
Route.post('/login', 'AuthController.loginUser')
Route.get('/forgot-password', 'AuthController.forgotPassword')
Route.get('/logout', 'AuthController.logout')

//API
Route.get('/api/initialApp', 'ApiController.initialApp')
Route.post('/api/post', 'PostController.store')
Route.post('/api/post/:id', 'PostController.update')
Route.get('/api/post/:id/delete', 'PostController.destroy')
Route.get('/api/user/:id', 'UserController.profile')
Route.get('/api/user/:id/follow', 'UserController.follow')
Route.get('/api/user/:id/unfollow', 'UserController.unfollow')


Route.any('*', ({ view }) => view.render('pages/react'))
