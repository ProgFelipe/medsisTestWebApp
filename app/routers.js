app.config(function($routeProvider){
  $routeProvider
  .when('/',
  {
    controller: 'LoadUsersController',
    templateUrl: 'components/users_directory/usersList.html'
  })
  .otherwise({redirectTo: '/'});
});
