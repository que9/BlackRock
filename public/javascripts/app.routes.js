

/*
	public/src/app.routes.js -> defines the routes of the application
*/

(function( ng, window )  {
	'use strict';

		//-- Configuration of client slide routing as we will end up creating SPA
		ng.module("app.routes", ["ui.router"])
			.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function( $stateProvider, $locationProvider, $urlRouterProvider ){	


				$stateProvider
					.state("home", {
						url:"/",
						controller:"EmployeeListCtrl",
						controllerAs:'ELCtrl',
						templateUrl : "employeeList"
					})

					.state("addEmp", {
						url:"/add-employee",
						templateUrl:"addEditEmployee",
						controller:"addEditEmployeeCtrl",
						controllerAs:"AddEditCtrl"
					});



				 $urlRouterProvider.otherwise("/");
				 $locationProvider.hashPrefix("BlackRock");
				 
		}]);


}( angular, window ));


