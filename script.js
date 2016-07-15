// Code goes here

angular.module('app', []);
angular.module('app').controller('MainController', function($scope, $http) {

  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  var onError = function(reason) {
    $scope.error = "could not fetch the user";
  }

  $http.get("https://api.github.com/users/Angular")
    .then(onUserComplete, onError);

  $scope.message = "hello Gordon";
  $scope.username = "angular";
  // 	$scope.person = {
  // 	  firstName:"Gordon",
  // 	  lastName:"Wang",
  // 	  imageSrc:"http://s5.sinaimg.cn/mw690/005y1m2Ozy70VL5R2KM64&690"
  // 	};

});

//$http.get is going to return a promise, so it cannot get details about robconery 
//immediately. what I need to do with that promise is invoke a then method and process the result.