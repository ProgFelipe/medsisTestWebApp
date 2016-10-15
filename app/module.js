//Create controller
app.controller('LoadUsersController', function($scope, $http) {
  $http.get('http://jsonplaceholder.typicode.com/users/').
      then(function(response) {
          $scope.customers = response.data;
      });
});
