'use strict'

const Route = use('Route')

// Route.on('/').render('welcome')
//Route.on('/').render('main')

Route.get('/', 'RecipeController.index')

Route.get('recipes/create', 'RecipeController.create')

Route.post('recipes/create', 'RecipeController.doCreate')

Route.get('recipes/:id', 'RecipeController.show')

Route.get('recipes/:id/edit', 'RecipeController.edit')
Route.post('recipes/:id/edit', 'RecipeController.update')

Route.get('recipes/:id/delete', 'RecipeController.delete')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doregister')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.dologin')

Route.group('ajax', function () {
  Route.delete('/recipes/:id/delete', 'RecipeController.ajaxDelete').middleware('auth')
}).prefix('/ajax')