carModule.controller("carsController", function ($scope, $routeParams, $location, carsFactory){
	var getAllCars = function(){
		carsFactory.getAllCars(function(cars){
			$scope.cars = cars;
		});
	}
	getAllCars();

	$scope.addCar = function(newCar){
		carsFactory.addCar(newCar, function(car){
			if(car.errors){
				$scope.errors = car.errors;
			} else {
				$scope.errors = {};
				$scope.newCar = {};
				carsFactory.getAllCars(function(cars){
					$scope.cars = cars;
					$scope.newCar = {};
				});
			}
		});
		$location.path("/cars");
	}

	$scope.deleteCar = function(car){
		if (confirm("Are you sure you want to delete this car?")){
			carsFactory.deleteCar(car, function(){
				getAllCars();
			});
		} 
	}

	var showCar = function(){
		carsFactory.getCar($routeParams.id, function(car){
			$scope.car = car;
		});
	}
	showCar();

	$scope.editCar = function(car){
		console.log("In client-controller with editCar: ", car);
		carsFactory.updateCar(car, function(updatedCar){
			console.log(updatedCar);
		});
		$location.path("/showCar/"+car._id);
	}
});