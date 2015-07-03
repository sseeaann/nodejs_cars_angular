module.exports = function(app) {
	var carsController = require('../controllers/cars_controller.js');

	// Find all cars in DB:
	app.get("/cars/getAllCars", function(req, res){
		carsController.getAllCars(req, res);
	});
	// Add new car to DB:
	app.post("/cars/addCar", function(req, res){
		carsController.addCar(req, res);
	});
	// Delete car in DB:
	app.post("/cars/deleteCar", function(req, res){
		carsController.deleteCar(req, res);
	});
	// Find ONE car in DB:
	app.post("/cars/getCar", function(req, res){
		carsController.getCar(req, res);
	});
	// Update car in DB:
	app.post("/cars/updateCar", function(req, res){
		carsController.updateCar(req, res);
	});

};