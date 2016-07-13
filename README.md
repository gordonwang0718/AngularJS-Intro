# AngularJS-Intro

1 Controller Basics
	1.1 Controller directive in HTML (ng-controller) 
		<div ng-app>
			<div ng-controller="MainController">
			</div>
		</div>
	1.2 Controller will be a function that Angular invokes
		var MainController = function ($scope) {
			$scope.message = "Hello!";
		}

		1.2.1 Controller takes a $scope parameter
		1.2.2 Attach model to $scope
2 The Capabilities
	2.1 Multiple Controllers
	2.2 Complex objects
	2.3 Nest Controllers