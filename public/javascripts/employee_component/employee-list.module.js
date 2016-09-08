
/*
	An reusalable, isolated employee.list module
*/

(function( ng ) {
	'use strict';
	
	angular.module('employee.list', [])
		.config([function() {
			//--			
		}])

		//-- Run block defines all the template of employee list modules
		.run(['$templateCache', function( $templateCache ){
				
				// List/View Employee Template				
				$templateCache.put("employeeList",

					['<div class="well">',
						'<div class="row">',
							'<div class="col-md-3">',
								'<div class="btn-group">',
								  '<button type="button" class="btn btn-default"',
								  		'ng-class="{\'btn-primary\':ELCtrl.views.list}" ng-click="ELCtrl.changeView(\'list\')">',
								  		'<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>',
								  '</button>',
								  '<button type="button" class="btn btn-default" ',
								  	'ng-class="{\'btn-primary\':ELCtrl.views.card}" ng-click="ELCtrl.changeView(\'card\')">',
								  		'<span class="glyphicon glyphicon-th-large" aria-hidden="true"></span>',
								  '</button>',
								'</div>',
							'</div>',
						'</div>',
						

						'</br>',
						'<div class="row">',
							'<div class="col-md-3 col-sm-4">',
								'<label>Search : </label>',
								'<input placeholder="Type in to search"  ng-model="ELCtrl.term" type="text" class="form-control" />',
							'</div>',
							'<div class="col-md-3 col-sm-4">',
						  		'<label>Sort On :</label>',
						  		'<select class="form-control"',
									'ng-options="item as item.label for item in ELCtrl.sortByList track by item.value" ',
									'ng-model="ELCtrl.sortingColumn"></select>',
							'</div>',

							'<div class="col-md-3 col-sm-4">',
						  		'<label>Group By :</label>',
						  		'<select class="form-control"',
									'ng-options="item as item.label for item in ELCtrl.groupByList track by item.value" ',
									'ng-model="ELCtrl.groupBy"></select>',
							'</div>',

						'</div>',						 
					'</div>',

						
					'<!-- list view -->	',
					'<div class="table-responsive" ng-if="ELCtrl.views.list">',
						'<table class="table table-striped table-hover table-condensed">',
							'<thead> ',
								'<tr>',
									'<th></th> ',
									'<th>Name</th> ',
									'<th>Email</th> ',
									'<th>DOB</th> ',
									'<th>Joining Date</th>',
									'<th>Previous Employer</th>',
									'<th>Department</th>',									
								'</tr> ',
							'</thead>',
						'</table>',

						'<div ng-repeat="( key, group ) in  (ELCtrl.dataSet | orderBy:ELCtrl.groupBy.value | groupBy:ELCtrl.groupBy.value )">',
								'<h4 ng-if="ELCtrl.groupBy.value && filtered.length">{{key}} <span class="number-counter">Showing {{filtered.length}} of {{group.length}}</span></h4>',

									'<table class="table table-striped table-hover table-condensed">',
										'<tbody>',
											'<tr ng-repeat="data in filtered = ( group | orderBy:[ELCtrl.sortingColumn.value] | filter:ELCtrl.term )">',
												'<td>',
													'<div class="avatar">',
														'<!-- image is @hardcoded only for view -->',
										      			'<img src="images/avatar.png" alt="avatar"',
										    		'</div>',
										    	'</td>',
												'<td>{{data.title}} {{data.name}} {{data.surname}}</td>',
												'<td>{{data.email}}</td>',
												'<td>{{data.dob | date}}</td>',
												'<td>{{data.joining_date | date}}</td>',
												'<td>{{data.last_employer}}</td>',
												'<td>{{data.department}}</td>',												
											'</tr>',
										'</tbody>',
									'</table>',
										
						'</div>',
					'</div>',
					'<!--/ list view  ends ->',
							

					'<!-- card view -->',
					'<div class="row" ng-if="ELCtrl.views.card">',
						'<div class="row" ng-repeat="(key,group) in  (ELCtrl.dataSet | orderBy:ELCtrl.groupBy.value | groupBy:ELCtrl.groupBy.value )" >',
							'<h4 ng-if="ELCtrl.groupBy.value && filtered.length">{{key}} <span class="number-counter">Showing {{filtered.length}} of {{group.length}}</span></h4>',

								'<div class="col-sm-4 col-md-3 col-xs-6"',
									'ng-repeat="data in filtered = ( group | orderBy:[ELCtrl.sortingColumn.value] | filter:ELCtrl.term )">',
									'<div class="panel panel-primary">',
										  '<div class="panel-heading">',
										    	'<span class="panel-title">{{data.title}} {{data.name}} {{data.surname}}</span>',
										  '</div>',
										  '<div class="panel-body">',
										    	'<div class="avatar">',
										    		'<!-- Image is @hardcoded only for view -->',
											      	'<img src="images/avatar.png" alt="avatar">',
											    '</div>',
										      '<div class="caption">',
									        		'<div>{{data.department}}</div>',
									        		'<div>{{data.dob}}</div>',
									        		'<div>{{data.last_employer}}</div>',
										      '</div>',
										  '</div>',
									'</div>',
								'</div>',
						'</div>',
					  
					'</div>',
					'<!--/ card view ends -->'].join("\n\r")
					
			   );


				// Add Employee Template
				$templateCache.put("addEditEmployee",
					['<div class="alert alert-success  fade in" role="alert" ng-show="AddEditCtrl.alerts.success">',
						'<button type="button" class="close"  aria-label="Close" ng-click="AddEditCtrl.dismissAlert(\'success\')">',
							'<span aria-hidden="true">×</span>',
						'</button>',
						'<strong>Congratulation!</strong> You just added an new employee. ',
					'</div>',

					'<div class="alert alert-warning fade in" role="alert" ng-show="AddEditCtrl.alerts.duplicate">',
						'<button type="button" class="close" aria-label="Close" ng-click="AddEditCtrl.dismissAlert(\'duplicate\')">',
							'<span aria-hidden="true">×</span></button>',
						'<strong>Sorry!</strong> User with the email id <strong>{{AddEditCtrl.lastUsedEmailId}}</strong> already exists.',
					'</div>',

					'<form class="form-horizontal" no-validate name="form">',
						'<div class="form-group">',
						    '<label for="title" class="col-sm-3 control-label">Title</label>',
						    '<div class="col-sm-9">',
							      '<select class="form-control" name="title" ng-model="AddEditCtrl.formData.title" required>',
							      		'<option  ng-repeat="title in AddEditCtrl.titles" value={{title}}>{{title}}</option>',
							      '</select>',
						    '</div>',
						'</div>',

						'<div class="form-group" ng-class="{\'has-error\':form.name.$invalid && form.name.$dirty}">',
						    '<label for="name" class="col-sm-3 control-label">Name</label>',
						    '<div class="col-sm-9" >',
						      	'<input type="text" name="name"',
						      		'ng-maxlength="10"',
						      		'ng-model="AddEditCtrl.formData.name" required class="form-control" id="name" placeholder="John doe">',
						      		
						      		'<!-- Messages -->',
						      		'<span ng-show ="form.name.$dirty && form.name.$error.maxlength"',
						      			'class="help-block">Name should be upto 10 character long</span>',
						      		'<span ng-show ="form.name.$dirty && form.name.$error.required"',
						      			'class="help-block">Name can not be left blank</span>',
						    '</div>',
						'</div>	',

						'<div class="form-group">',
						    '<label for="surname" class="col-sm-3 control-label">Surname</label>',
						    '<div class="col-sm-9">',
						      '<input type="text" name="surname" ng-model="AddEditCtrl.formData.surname" class="form-control" id="surname" placeholder="surname">',
						    '</div>',
						  '</div>',

						  '<div class="form-group" ng-class="{\'has-error\':form.email.$invalid && form.email.$dirty}">',
						    '<label for="email" class="col-sm-3 control-label">Email</label>',
						    '<!-- ng-pattern="/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm" -->',
						    '<div class="col-sm-9">',
						      	'<input type="email" required name="email"',
						      		'ng-model="AddEditCtrl.formData.email" class="form-control" id="email"',
						      		'placeholder="email@example.com">',

						      	'<!-- Messages -->',
					      		'<span ng-show ="form.email.$dirty && form.email.$error.required"',
					      			'class="help-block">Email can not be left blank</span>',
					      		'<span ng-show ="form.email.$dirty && form.email.$error.email"',
					      			'class="help-block">Invalid email address</span>',
						    '</div>',
						  '</div>',
						  '<div class="form-group">',
						    '<label for="dob" class="col-sm-3 control-label">Date of birth</label>',
						    '<div class="col-sm-9">',
						      	'<input type="input" ng-pattern="/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/" name="dob" ng-model="AddEditCtrl.formData.dob" required="true" class="form-control" id="dob" placeholder="MM/DD/YYYY">',
						    '</div>',
						  '</div>',


						  '<div class="form-group">',
						    '<label for="joining_date" class="col-sm-3 control-label">Date of joining</label>',
						    '<div class="col-sm-9">',
						      	'<input ng-pattern="/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/" type="input" name="joining_date" ng-model="AddEditCtrl.formData.joining_date" required class="form-control" id="joining_date" placeholder="MM/DD/YYYY">',
						    '</div>',
						  '</div>',
						  
						  '<div class="form-group">',
						    '<label for="department" class="col-sm-3 control-label">Department</label>',
						    '<div class="col-sm-9">',
						      '<select class="form-control" required ng-model="AddEditCtrl.formData.department"> ',
						      	'<option  ng-repeat="department in AddEditCtrl.departments" value={{department}}>{{department}}</option>',
						      '</select>',

						    '</div>',
						  '</div>',

						  '<div class="form-group">',
						    '<label for="last_employer" class="col-sm-3 control-label">Previous Employer</label>',
						    '<div class="col-sm-9">',
						      '<input type="text" name="last_employer" ng-model="AddEditCtrl.formData.last_employer" class="form-control" id="last_employer" placeholder="BlackRock">',
						    '</div>',
						  '</div>',

						  '<div class="form-group">',
						    '<div class="col-sm-offset-3 col-sm-9">',
						      	'<button type="button" ng-class="{disabled:form.$invalid}" class="btn btn-primary" ng-click="form.$valid && AddEditCtrl.add( AddEditCtrl.formData )">Add Employee</button> &nbsp;',
						    	
						    	'<button type="button" class="btn btn-primary" ui-sref="home">Home</button>',
						    '</div>',
						  '</div>',
					'</form>'].join("")
				);


		}]);

}( angular ));




