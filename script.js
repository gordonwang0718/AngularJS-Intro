// Code goes here

angular.module('app',[]);
angular.module('app').controller('MainController', function($scope) {
	$scope.message = "hello Gordon";
	$scope.person = {
	  firstName:"Gordon",
	  lastName:"Wang",
	  imageSrc:"http://s5.sinaimg.cn/mw690/005y1m2Ozy70VL5R2KM64&690"
	};
});