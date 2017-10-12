	var mainApp = angular.module("mainApp", ['ngRoute', 'ionic', 'ngCordova']);

	var tokenRetorno = "0" ;  

	mainApp.run(function($ionicPlatform) {
		
		$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		  cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
		  // org.apache.cordova.statusbar required
		  StatusBar.styleDefault();
		}

		//FCMPlugin.getToken( successCallback(token), errorCallback(err) );
		//Keep in mind the function will return null if the token has not been established yet.

		alert ('Antes do FCM Plugin ');
			
			
		document.addEventListener("deviceready", setup());	
			
				
		function setup(){
			
				
		FCMPlugin.getToken(
		  function (token) {
			tokenRetorno = token ; 
		  
			alert('Token: ' + token);
			console.log('Token: ' + token);
		  },
		  function (err) {
			alert('error retrieving token: ' + token);
			console.log('error retrieving token: ' + err);
		  }
		);

		FCMPlugin.onNotification(
		  function(data){
			if(data.wasTapped){
			  //Notification was received on device tray and tapped by the user.
			  alert("Tapped: " +  JSON.stringify(data) );
			}else{
			  //Notification was received in foreground. Maybe the user needs to be notified.
			  alert("Not tapped: " + JSON.stringify(data) );
			}
		  },
		  function(msg){
			alert('onNotification callback successfully registered: ' + msg);
			console.log('onNotification callback successfully registered: ' + msg);
		  },
		  function(err){
			alert('Error registering onNotification callback: ' + err);
			console.log('Error registering onNotification callback: ' + err);
		  }
		);


		}
		

		});
	});		 




	mainApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.

		when('/addStudent', {
		   templateUrl: 'addStudent.htm',
		   controller: 'AddStudentController'
		}).

		when('/viewStudents', {
		   templateUrl: 'viewStudents.htm',
		   controller: 'ViewStudentsController'
		}).

		otherwise({
		   redirectTo: '/addStudent'
		});
	}]);

	mainApp.controller('AddStudentController', function($scope) {
		$scope.message = "This page will be used to display add student form";
	});

	mainApp.controller('ViewStudentsController', function($scope, $http) {
		$scope.message = "This page will be used to display all the students";

		alert('Fazendo requisiocao , token' + tokenRetorno);

		$http({
		  method: 'GET',
		  url: 'http://192.168.0.184:8080/RESTAndroid/hello/' + tokenRetorno 
		}).then(function successCallback(response) {

			alert('Requisicao com token: '+ tokenRetorno ) ;  	

		}, function errorCallback(response) {
			alert('Erro enviando token ' ) ; 

		});			

	});

