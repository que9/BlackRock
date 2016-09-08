

/*
	This file "public/javascripts/app.ctrl.js" serves as top most controller of the app
*/

(function( ng, window ) {
	'use strict';
	
	angular.module('app.controller', [])	
		.controller('appCtrl', ['$rootScope', '$state',  function( $rootScope, $state ){			
			/* 
				This controller can be used at the container for this app
				that will be used outside the <ui-view> tag
			*/

			//-- Adding the $state to the $rootScope so that state specific decision can be made, like making an tab active
			$rootScope.$state = $state;

		}]);

	
}( angular, window ));