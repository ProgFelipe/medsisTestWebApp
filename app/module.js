//Create controllers
app.controller('LoadUsersController', function($scope, $http) {
  $http.get('http://jsonplaceholder.typicode.com/users/').
      then(function(response) {
          $scope.customers = response.data;
          $scope.totalItems = $scope.customers.length;
          //PaginationCtrl
          $scope.listLimit = 5;
          $scope.maxSize = Math.ceil($scope.customers.length / $scope.listLimit);
          $scope.bigTotalItems = $scope.totalItems * 2;
      });
    $scope.getCustomerInfo = function(customer, $isCollapsed) {
      $scope.selected = customer;
      $isCollapsed = !$isCollapsed;
    }
});

//Bootstrap modules
//https://angular-ui.github.io/bootstrap/#/collapse
app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});

//Custom https://angular-ui.github.io/bootstrap/#/pagination
app.controller('PaginationDemoCtrl', function ($scope, $log) {

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.bigCurrentPage);
  };
  $scope.bigCurrentPage = 1;
});
//End Bootstrap modules
