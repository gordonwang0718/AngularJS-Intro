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

5 Modules
	5.1 Controllers usually live in modules
		Avoids the global namespace
	5.2 Working with modules
		5.2.1 Create a module with a name.
		5.2.2 Register your controllers in the module
		5.2.3 Tell Angular to use your module with ng-app

6 Directive and Views - Philosopuy
	6.1 $scope provides the model
	6.2 Model does not touch HTML
	6.3 Data binding moves model data to view
	6.4 Directive allow for indirect model view interaction

	Directives are all about letting the view and the model work together without requieing direct interaction. and just like we have directives to move data from the model into the view, we also have directive to move information from the view into the model. And many of these directives work in both directions, so if dara changes in the view or the model, the directive will keep both sides in sync by propagating the chages throught the application.

