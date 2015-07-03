var carModule = angular.module('carsApp', ['ngRoute']);

carModule.config(function ($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'carsController',
			templateUrl: 'partials/carsIndex.html',
		})
		.when('/addCar',{
			controller: 'carsController',
			templateUrl: 'partials/addCar.html'
		})
		.when('/cars',{
			controller: 'carsController',
			templateUrl: 'partials/viewCars.html'
		})
		.when('/editCar/:id',{
			controller: 'carsController',
			templateUrl: 'partials/editCar.html'
		})
		.when('/showCar/:id',{
			controller: 'carsController',
			templateUrl: 'partials/showCar.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});