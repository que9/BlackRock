
(function( ng, window, undefined ){
		
		"use strict";

		var app = angular.module( "app" , ["app.routes", "angular.filter",  "app.controller", "employee.list"] );
		
		app.config(['$httpProvider', '$compileProvider', function( $httpProvider, $compileProvider ){
			// Not allowing angular to attach scope on elements, so that they are not avail from console
			$compileProvider.debugInfoEnabled( false );
			// It will use the nearest $digest cycle only once with $timeout set to 0
			$httpProvider.useApplyAsync( true );
		}]);	

		app.run(['$rootScope',  '$state', function( $rootScope , $state ){					
			
			//-- Project specific info
			$rootScope.info = {
				version:"1.0.0",
				name:"Emp Management App",
				framework:"AngularJS",				
				frameworkVersion: angular.version
			};

		}]);

		
		//-- Dynamically mounting the app on document
		angular.bootstrap( angular.element( document ), ["app"] );

}( angular, window ));



