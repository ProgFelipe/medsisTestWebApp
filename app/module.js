//Create controllers
app.controller('LoadUsersController', function($scope, $http) {
  /*
  *http://jsonplaceholder.typicode.com/users?username=Bret
  *This service doesnt provide function to autocomplete
  *requires the full username to show data
  */
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

//http://angular-ui.github.io/bootstrap/#/typeahead
app.controller('TypeaheadCtrl', function($scope, $filter, $log) {

  var _selected;
  $scope.selected;
  $scope.autocompleteDetail = false;
  $scope.filterParams = {
              order: 'username'
              };

  $scope.onSelectedCustomer = function($item, $model, $label){
    $log.log($item);
    $scope.autocompleteDetailVisibility = true;
    $scope.selected = $item;
  };

  $scope.onHideDetail = function(){
    $scope.autocompleteDetailVisibility = false;
  }
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function(val) {
    var filteredData = $filter('filter')($scope.customers, {username: val});
    filteredData = $filter('orderBy')(filteredData, $scope.filterParams.order);
    var usersNames;
    return filteredData;
    //For service asynchronously autocomplete
    /*return $http.get('http://jsonplaceholder.typicode.com/users', {
      params: {
        username: val,
      }
    }).then(function(response){
      if(response.data.results != null){
        return response.data.results.map(function(item){
        return item.formatted_address;
      });
      }else{
        return response.data;
      }
    });*/
  };
});

//End Bootstrap modules
