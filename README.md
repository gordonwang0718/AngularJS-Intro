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

3 $http Service
	3.1 Encapsulates HTTP communication
		GET, POST, PUT, DELETE
	3.2 Can "ask" for $http inside a controller
		just add as another parameter to controller function
	
	*HTTP Communication methods on this object never ever return the data you need immediately. That Because all communication is asynchronous.

	3.3 Always returns a promise
		A promise to deliver a value in the future.

4 Github API
	4.1 The API is avaiable to call from JavaScript in a browser
	4.2 Returns JSON (easy to convert into objects)
	4.3 No authentication or client key required

