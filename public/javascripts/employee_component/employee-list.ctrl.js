

(function( ng ) {
	'use strict';
	
	angular.module('employee.list')
		.controller('EmployeeListCtrl', ['$state', 'DataSetService',
			function( $state, DataSetService ){
						
			//@Info : I'm using only two views, you can simulate the detailed view by clicking on edit button
			this.views = {
				list:true,
				card:false				
			};


			//-- Filtering term
			this.term 			= "";
			//-- Main set of data that we iterate over
			this.dataSet 		= DataSetService.dataSet;
			this.filteredData   = null;
			this.sortByList   	= DataSetService.sortByList;
			this.sortingColumn  = this.sortByList[0];

			this.groupByList    = DataSetService.groupByList;
			this.groupBy        = this.groupByList[0];

			//-- Switch between views
			this.changeView = function( view ){
				if( view in this.views ){
					switch( view ){
						case "list" :
							this.views[view] = true;
							this.views.card  = false;
						break;
						case "card" :
							this.views[view] = true;
							this.views.list  = false;
						break;
					}
				}
			};



		}]);

	
}( angular ));