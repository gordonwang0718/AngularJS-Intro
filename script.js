// Code goes here

angular.module('app', []);
angular.module('app').controller('MainController', function($scope, $http) {

  var onUserComplete = function(response) {
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
      .then(onRepos, onError);
  };
  
  var onRepos = function(response){
    $scope.repos = response.data;
  };
  
  var onError = function(reason) {
    $scope.error = "could not fetch the user";
  }
  
  $scope.search = function(username){
    $http.get("https://api.github.com/users/" + username)
    .then(onUserComplete, onError);
  };

  $scope.message = "hello Gordon";
  $scope.username = "angular";

});