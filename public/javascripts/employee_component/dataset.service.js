

(function( ng, undefined ){
	"use strict";

	// Defining a dataSet service on the app module
	// It also has method that operates on the dataSet

	ng.module("employee.list")
		.service('DataSetService', ['$timeout', function( $timeout ){	

				//@Info : This dummy json data is generator from http://www.generatedata.com/
				this.dataSet = [									
									{
										"name": "Janna",
										"surname": "Russo",
										"email": "vitae@abc.com",
										"dob": "2015-12-31",
										"joining_date": "2015-11-08",
										"title": "Mrs.",
										"last_employer": "Cakewalk",
										"department": "Sales"
									},
									{
										"name": "Olympia",
										"surname": "Harrell",
										"email": "semper@ligula.ca",
										"dob": "2016-01-27",
										"joining_date": "2016-09-30",
										"title": "Ms.",
										"last_employer": "Borland",
										"department": "Customer Service"
									},
									{
										"name": "Zephania",
										"surname": "Mcneil",
										"email": "morbi@Integer.com",
										"dob": "2016-01-25",
										"joining_date": "2016-08-06",
										"title": "Mrs.",
										"last_employer": "Borland",
										"department": "Development"
									},
									{
										"name": "Sarah",
										"surname": "Kemp",
										"email": "ligula@etrutrum.ca",
										"dob": "2016-05-06",
										"joining_date": "2016-01-29",
										"title": "Ms.",
										"last_employer": "Cakewalk",
										"department": "Legal Department"
									},
									{
										"name": "Willa",
										"surname": "Webster",
										"email": "nonummy.ips@Nullam.net",
										"dob": "2016-04-17",
										"joining_date": "2017-03-11",
										"title": "Ms.",
										"last_employer": "Lycos",
										"department": "Human Resources"
									},
									{
										"name": "Channing",
										"surname": "Mccarthy",
										"email": "libero@auctor.ca",
										"dob": "2017-02-04",
										"joining_date": "2016-03-15",
										"title": "Ms.",
										"last_employer": "Microsoft",
										"department": "R&D"
									},
									{
										"name": "Moana",
										"surname": "Winters",
										"email": "mi@tristique.edu",
										"dob": "2016-04-08",
										"joining_date": "2016-12-24",
										"title": "Mrs.",
										"last_employer": "Borland",
										"department": "Accounting"
									},
									{
										"name": "Illiana",
										"surname": "Church",
										"email": "Nullam@nibh.com",
										"dob": "2017-01-19",
										"joining_date": "2015-11-23",
										"title": "Ms.",
										"last_employer": "Google",
										"department": "Asset Management"
									},
									{
										"name": "Pascale",
										"surname": "Lowe",
										"email": "neque@imperdietn.ca",
										"dob": "2016-05-24",
										"joining_date": "2015-08-26",
										"title": "Mrs.",
										"last_employer": "Adobe",
										"department": "Development"
									},
									{
										"name": "Carson",
										"surname": "Mccarthy",
										"email": "integer@perconubia.ca",
										"dob": "2015-08-26",
										"joining_date": "2017-07-18",
										"title": "Mrs.",
										"last_employer": "Yahoo",
										"department": "Media Relations"
									},
									{
										"name": "Paki",
										"surname": "David",
										"email": "nulla@suada.com",
										"dob": "2016-02-15",
										"joining_date": "2015-09-29",
										"title": "Mrs.",
										"last_employer": "Chami",
										"department": "Customer Relations"
									},
									{
										"name": "Keelie",
										"surname": "Mcgee",
										"email": "nunc@duisemperet.org",
										"dob": "2015-09-27",
										"joining_date": "2017-07-12",
										"title": "Dr.",
										"last_employer": "Chami",
										"department": "Public Relations"
									},
									{
										"name": "Aphrodite",
										"surname": "Floyd",
										"email": "ipsum@quamvel.com",
										"dob": "2017-03-09",
										"joining_date": "2015-09-21",
										"title": "Mrs.",
										"last_employer": "Yahoo",
										"department": "Human Resources"
									},
									{
										"name": "Pearl",
										"surname": "Knapp",
										"email": "tortor.int@don.ca",
										"dob": "2015-09-28",
										"joining_date": "2017-03-06",
										"title": "Dr.",
										"last_employer": "Lavasoft",
										"department": "Development"
									},
									{
										"name": "Wendy",
										"surname": "Cardenas",
										"email": "orci@dolor.org",
										"dob": "2015-11-13",
										"joining_date": "2015-09-11",
										"title": "Mrs.",
										"last_employer": "Finale",
										"department": "Legal Department"
									},
									{
										"name": "Medge",
										"surname": "Adkins",
										"email": "mauris@posuere.co.uk",
										"dob": "2016-02-06",
										"joining_date": "2016-02-28",
										"title": "Mr.",
										"last_employer": "Apple Systems",
										"department": "Legal Department"
									},
									{
										"name": "Cadman",
										"surname": "Adkins",
										"email": "lobortis@amcorper.co.uk",
										"dob": "2017-08-04",
										"joining_date": "2017-05-23",
										"title": "Mrs.",
										"last_employer": "Lavasoft",
										"department": "Customer Service"
									},
									{
										"name": "Emery",
										"surname": "Lindsay",
										"email": "Ut@Aliq.ca",
										"dob": "2015-12-16",
										"joining_date": "2016-03-12",
										"title": "Mr.",
										"last_employer": "Chami",
										"department": "Sales"
									},
									{
										"name": "Rina",
										"surname": "Weber",
										"email": "libero.est@idera.org",
										"dob": "2016-02-12",
										"joining_date": "2017-04-07",
										"title": "Dr.",
										"last_employer": "Altavista",
										"department": "Public Relations"
									},
									{
										"name": "Shelby",
										"surname": "Nichols",
										"email": "a.arcu@estnum.ca",
										"dob": "2016-10-03",
										"joining_date": "2015-09-22",
										"title": "Dr.",
										"last_employer": "Sibelius",
										"department": "Accounting"
									},
									{
										"name": "Alexis",
										"surname": "Workman",
										"email": "magna@etmagnis.com",
										"dob": "2017-03-13",
										"joining_date": "2015-08-21",
										"title": "Mr.",
										"last_employer": "Lycos",
										"department": "Advertising"
									},
									{
										"name": "Basil",
										"surname": "Rose",
										"email": "ut.lacus@augue.co.uk",
										"dob": "2016-09-02",
										"joining_date": "2016-06-17",
										"title": "Dr.",
										"last_employer": "Finale",
										"department": "Finances"
									},
									{
										"name": "Ava",
										"surname": "Cantrell",
										"email": "sus@num.ca",
										"dob": "2016-05-21",
										"joining_date": "2017-02-21",
										"title": "Ms.",
										"last_employer": "Lycos",
										"department": "Legal Department"
									},
									{
										"name": "Graiden",
										"surname": "Castillo",
										"email": "ac@sedpede.edu",
										"dob": "2016-10-18",
										"joining_date": "2015-11-27",
										"title": "Mr.",
										"last_employer": "Altavista",
										"department": "Media Relations"
									},
									{
										"name": "Burton",
										"surname": "Stewart",
										"email": "Nam.scelerisque@elit.edu",
										"dob": "2015-11-23",
										"joining_date": "2017-05-06",
										"title": "Mrs.",
										"last_employer": "Sibelius",
										"department": "Finances"
									},
									{
										"name": "Lisandra",
										"surname": "Rogers",
										"email": "dictum@cons.net",
										"dob": "2015-08-15",
										"joining_date": "2016-04-11",
										"title": "Dr.",
										"last_employer": "Chami",
										"department": "Quality Assurance"
									},
									{
										"name": "Kermit",
										"surname": "Barry",
										"email": "sapien.Cras@pedeet.co.uk",
										"dob": "2017-01-23",
										"joining_date": "2017-01-10",
										"title": "Ms.",
										"last_employer": "Yahoo",
										"department": "Customer Service"
									},
									{
										"name": "Jonas",
										"surname": "Giles",
										"email": "Aliquam@semperdui.edu",
										"dob": "2016-11-02",
										"joining_date": "2016-09-15",
										"title": "Ms.",
										"last_employer": "Yahoo",
										"department": "Tech Support"
									},
									{
										"name": "Karina",
										"surname": "Holloway",
										"email": "ipsum@quispede.org",
										"dob": "2017-02-19",
										"joining_date": "2016-07-13",
										"title": "Dr.",
										"last_employer": "Lycos",
										"department": "Human Resources"
									},
									{
										"name": "Ivy",
										"surname": "Galloway",
										"email": "aliquet@nonummy.co.uk",
										"dob": "2016-01-24",
										"joining_date": "2016-02-06",
										"title": "Dr.",
										"last_employer": "Microsoft",
										"department": "Customer Service"
									},
									{
										"name": "Jamal",
										"surname": "Klein",
										"email": "pede@infaucibus.com",
										"dob": "2017-06-06",
										"joining_date": "2016-07-02",
										"title": "Ms.",
										"last_employer": "Chami",
										"department": "Customer Service"
									},
									{
										"name": "Demetrius",
										"surname": "Cantu",
										"email": "consequat.nec@pe.ca",
										"dob": "2015-12-22",
										"joining_date": "2015-10-05",
										"title": "Ms.",
										"last_employer": "Adobe",
										"department": "Tech Support"
									},
									{
										"name": "Jin",
										"surname": "Pruitt",
										"email": "pharetra@adip.edu",
										"dob": "2016-02-23",
										"joining_date": "2016-10-28",
										"title": "Mr.",
										"last_employer": "Sibelius",
										"department": "Customer Service"
									},
									{
										"name": "Chaney",
										"surname": "Bright",
										"email": "rutrum.non@Fusce.co.uk",
										"dob": "2017-05-23",
										"joining_date": "2015-09-18",
										"title": "Dr.",
										"last_employer": "Cakewalk",
										"department": "Accounting"
									},
									{
										"name": "Bruce",
										"surname": "Day",
										"email": "vitae@temp.net",
										"dob": "2016-06-06",
										"joining_date": "2016-01-04",
										"title": "Mrs.",
										"last_employer": "Chami",
										"department": "Sales"
									},
									{
										"name": "Glenna",
										"surname": "Cote",
										"email": "nisi.Mauris@libero.co.uk",
										"dob": "2017-08-06",
										"joining_date": "2017-01-28",
										"title": "Ms.",
										"last_employer": "Adobe",
										"department": "Media Relations"
									},
									{
										"name": "Stewart",
										"surname": "Boyer",
										"email": "Maecenas@Mauris.org",
										"dob": "2015-12-29",
										"joining_date": "2016-12-24",
										"title": "Dr.",
										"last_employer": "Borland",
										"department": "Accounting"
									},
									{
										"name": "Tyler",
										"surname": "Potter",
										"email": "tincidunt@sit.com",
										"dob": "2016-08-30",
										"joining_date": "2016-02-25",
										"title": "Ms.",
										"last_employer": "Lycos",
										"department": "Media Relations"
									},
									{
										"name": "Dante",
										"surname": "Thornton",
										"email": "nec@diam.ca",
										"dob": "2016-05-01",
										"joining_date": "2017-01-19",
										"title": "Dr.",
										"last_employer": "Macromedia",
										"department": "Public Relations"
									},
									{
										"name": "Gil",
										"surname": "Roach",
										"email": "elementum@Aeneansed.net",
										"dob": "2017-07-15",
										"joining_date": "2016-08-02",
										"title": "Mr.",
										"last_employer": "Borland",
										"department": "Customer Relations"
									},
									{
										"name": "Heidi",
										"surname": "Jones",
										"email": "in@rutrumeu.com",
										"dob": "2016-07-09",
										"joining_date": "2017-07-31",
										"title": "Mrs.",
										"last_employer": "Adobe",
										"department": "Legal Department"
									},
									{
										"name": "Amela",
										"surname": "Hood",
										"email": "dui@gravidaAliq.ca",
										"dob": "2016-09-19",
										"joining_date": "2015-09-26",
										"title": "Mrs.",
										"last_employer": "Finale",
										"department": "Legal Department"
									},
									{
										"name": "Jin",
										"surname": "Finley",
										"email": "nunc.eu@preti.com",
										"dob": "2017-01-12",
										"joining_date": "2017-02-04",
										"title": "Mr.",
										"last_employer": "Altavista",
										"department": "Media Relations"
									},
									{
										"name": "Portia",
										"surname": "Graham",
										"email": "imperdiet@eueuismod.edu",
										"dob": "2017-02-27",
										"joining_date": "2017-01-30",
										"title": "Mr.",
										"last_employer": "Apple Systems",
										"department": "Legal Department"
									},
									{
										"name": "India",
										"surname": "Atkinson",
										"email": "et.nunc@acarcu.edu",
										"dob": "2015-10-25",
										"joining_date": "2017-02-12",
										"title": "Mr.",
										"last_employer": "Sibelius",
										"department": "Media Relations"
									},
									{
										"name": "Hilda",
										"surname": "Humphrey",
										"email": "feugiat.Sed.nec@fames.org",
										"dob": "2017-07-07",
										"joining_date": "2016-04-12",
										"title": "Ms.",
										"last_employer": "Sibelius",
										"department": "Sales"
									},
									{
										"name": "Rose",
										"surname": "White",
										"email": "pena.et@netus.com",
										"dob": "2016-11-27",
										"joining_date": "2016-10-22",
										"title": "Mrs.",
										"last_employer": "Lycos",
										"department": "Media Relations"
									},
									{
										"name": "Barclay",
										"surname": "Cline",
										"email": "Integer.vitae@arcu.edu",
										"dob": "2016-08-24",
										"joining_date": "2015-09-09",
										"title": "Ms.",
										"last_employer": "Lavasoft",
										"department": "Asset Management"
									},
									{
										"name": "September",
										"surname": "Olson",
										"email": "sem.pellen@nulla.org",
										"dob": "2017-07-21",
										"joining_date": "2017-02-25",
										"title": "Ms.",
										"last_employer": "Lavasoft",
										"department": "Development"
									},
									{
										"name": "Jocelyn",
										"surname": "Barnett",
										"email": "libero@tempo.com",
										"dob": "2017-06-28",
										"joining_date": "2016-01-02",
										"title": "Mr.",
										"last_employer": "Borland",
										"department": "Legal Department"
									},
									{
										"name": "Hop",
										"surname": "Huff",
										"email": "penatibus@edu.ca",
										"dob": "2015-08-19",
										"joining_date": "2016-06-07",
										"title": "Ms.",
										"last_employer": "Cakewalk",
										"department": "R&D"
									},
									{
										"name": "Driscoll",
										"surname": "Butler",
										"email": "In@necmollis.edu",
										"dob": "2017-02-19",
										"joining_date": "2016-08-07",
										"title": "Dr.",
										"last_employer": "Chami",
										"department": "Customer Relations"
									},
									{
										"name": "Stewart",
										"surname": "Duke",
										"email": "sit@etarcu.com",
										"dob": "2015-10-31",
										"joining_date": "2016-10-08",
										"title": "Mrs.",
										"last_employer": "Sibelius",
										"department": "Customer Service"
									},
									{
										"name": "Malik",
										"surname": "Kline",
										"email": "sed@Etiamimperdiet.org",
										"dob": "2016-12-24",
										"joining_date": "2016-05-18",
										"title": "Mrs.",
										"last_employer": "Apple Systems",
										"department": "Accounting"
									},
									{
										"name": "Lewis",
										"surname": "Blackwell",
										"email": "Nullam.neque@at.ca",
										"dob": "2016-05-10",
										"joining_date": "2016-07-24",
										"title": "Dr.",
										"last_employer": "Sibelius",
										"department": "R&D"
									}
								];

				//@Info : The purpose of storing titles, departments and groupByList in service is to make them sharable in whole application
				this.titles 	 = ["Mrs.", "Ms.", "Dr.", "Mr."];
				
				this.departments = ["Legal Department", "Tech Support", "Development", "Public Relations", "Finances", "Accounting", "Sales", "Management", "R&D", "Customer Relations", "Payroll", "Media Relations"];
				
				//-- A sharable list with all possible groupBy columns
				this.groupByList = [
					{label:"Select to groupBy", value:null},
					{label:"title", 			value:"title"}, 
					{label:"department", 		value:"department"},
					{label:"surname", 			value:"surname"},
					{label:"Previous Employer", value:"last_employer"}];

				//-- A sharable list with all possible sorting columns
				this.sortByList  = [
					{label:"Select Column", value:null},
					{label:"name", 			value:"name"},
					{label:"surname", 		value:"surname"}, 
					{label:"Date of birth", value:"dob"},
					{label:"Joining Date", 	value:"joining_date"},
					{label:"Last employee", value:"last_employer"},
					{label:"email", 		value:"email"},
					{label:"department", 	value:"department"}
				];



				//-- Adding a new record into the service
				this.addRecord = function( record ){
					this.dataSet.push( record );
				};


				//-- Delets a record from the list
				this.delete = function( email ){
					var index = this.doesExist( email );
					if( index > -1 )
						this.dataSet.splice( index, 1);
				};

				/*
					@Desciption : Checkes a record exist with the given email id
					@Params     : String<email>
					@Return     : Boolean
								-1 means record does not exist with the given email id
								else record exists at n index
				*/
				this.doesExist = function( email ){
					//-- Assuming that the email does not exists
					var index = -1;
					
						try{
							this.dataSet.forEach(function(item, _index){
								if( item.email === email )
									throw _index;    // throw statement exists the forEach iterator
							});
						}
						catch( _index ){
							index = _index;
						} 

					return index;
				};


		}]);


})( angular );
