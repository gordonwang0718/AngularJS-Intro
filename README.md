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

7 Directive and Views - Filters
	7.1 Basic format: expression | filterName:parameter
		Name
		currency				{{ammount | currency: "USD$"}}
		date					{{startDate | date: 'short'}}
		filter 					repo in repos | filter: searchTerm
		json 					{{repo | json}}
		limitTo					repo in repos | limitTo:10
		lowercase, uppercase	{{user.name | uppercase}}
		number					{{stars | number}}
		orderBy					repo in repos | filter:searchTerm | orderBy: 'name'

8 Directive and Views - ng-show and hides

9 Directive and Views - ng-include
	9.1 ng-include is useful for a number of scenarios, because ng-include can bring in HTML from another source, like another file, and then you can use that HTML in the current view. This is useful because you can break up a complex page into pieces; it's also useful if you have some markup that you can reuse in other views of the application.

10 Directive and Views - Directives

	ng-app          ng-bind	       ng-blur       ng-change
	ng-class        ng-click       ng-copy	     ng-dblclick
	ng-disabled     ng-focus       ng-hide       ng-href
	ng-if		    ng-include     ng-init       ng-keydown
	ng-keypress     ng-keyup       ng-model      ng-mouseenter
	ng-mouseleave   ng-mousemove   ng-mouseover  ng-paste
	ng-repeat       ng-style       ng-switch     ng-transclude














