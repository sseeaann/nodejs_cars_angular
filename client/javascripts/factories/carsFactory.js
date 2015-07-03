carModule.factory("carsFactory", function ($http){
	var cars = [],
		factory = {};

	factory.getAllCars = function(callback){
		$http.get("/cars/getAllCars").success(function(data){
			callback(data);
		});
	}

	factory.addCar = function(newCar, callback){
		$http.post("/cars/addCar", newCar).success(function(data){
			callback(data);
		});
	}

	factory.deleteCar = function(car, callback){
		$http.post("/cars/deleteCar", car).success(function(data){
			callback(data);
		});
	}

	factory.getCar = function(car, callback){
		$http.post("/cars/getCar", {id:car}).success(function(data){
			callback(data);
		});
	}

	factory.updateCar = function(car, callback){
		console.log("in factory: ", car);
		$http.post("/cars/updateCar", car).success(function(data){
			console.log("Returned to the factory with updated car: ",data);
			callback(data);
		});
	}

	return factory;
});