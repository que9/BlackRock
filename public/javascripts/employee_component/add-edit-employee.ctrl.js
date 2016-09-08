

(function( ng, window ) {
	'use strict';
	
	angular.module('employee.list')
		.controller('addEditEmployeeCtrl', ['$rootScope', '$state', '$scope', 'DataSetService',
			function( $rootScope, $state, $scope, DataSetService ){
				
				//  Flag variables for dispalying alerts
				this.alerts = {
					success:false,
					duplicate:false
				};


				//-- Using service for sharing centerlize data
				this.titles 		= ng.copy( DataSetService.titles );
				this.departments 	= ng.copy( DataSetService.departments );

				//--Form data object
				this.formData = {
					title:this.titles[0],
					surname:"",
					name:"",
					email:"",
					dob:null,
					joining_date:null,
					department:this.departments[0],
					last_employer:""
				};



				//-- Closing an alert
				this.dismissAlert = function( alertType ){
					if( alertType in this.alerts )
						this.alerts[alertType] = false;
				};



				/*
					@Description : Tries to push a new entry only if its not allready avail in the list
					@Params : formData<Object>
					@Return : void 0
				*/
				this.add = function( formData ){
					//-- Adding a new record only if that does not exists othersiwe showing an error message
					if( DataSetService.doesExist( formData.email ) === -1 ){
						DataSetService.addRecord( ng.copy(formData) );
						this.alerts.success = true;
					}
					else{
						this.lastUsedEmailId = formData.email;
						this.alerts.duplicate = true;
					}
				};


				this.remove = function( formData ){
					DataSetService.delete( formData.email );
				};
			


		}]);

	
}( angular, window ));