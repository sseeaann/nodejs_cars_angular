var mongoose = require("mongoose"),
	carsModel = mongoose.model("cars");

module.exports = (function(app){
	return {
		getAllCars: function(req, res){
			carsModel.find({}, function(err, data){
				if(err){
					console.error("error retreiving cars from DB", err);
				} else {
					res.json(data);
				}
			});
		},
		addCar: function(req, res){
			var newCar = new carsModel({
				make: req.body.make,
				model: req.body.model,
				year: req.body.year
			});
			newCar.save(function(err, data){
				if(err){
					console.log("DANGER Will Robinson! Err while saving new car");
					res.json(err);
				} else {
					res.json(data);
				}
			});
		},
		deleteCar: function(req, res){
			console.log(req.body);
			carsModel.remove({_id: req.body._id}, function(err, data){
				if(err){
					console.log("ERR ERR while trying to delete car!", err);
				} else {
					res.json({data: "success"});
				}
			});
		},
		getCar: function(req, res){
			carsModel.findOne({_id: req.body.id}, function(err, data){
				if(err){
					console.log("ERR ERR while trying to show car!", err);
				} else {
					res.json(data);
				}
			});
		},
		updateCar: function(req, res){
			console.log("POST DATA: ", req.body);
			carsModel.update({_id: req.body._id}, { $set: { make: req.body.make, model: req.body.model, year: req.body.year }}, function(err, data){
				if(err){
					console.log("ERR ERR while trying to update car!", err);
				} else {
					res.json(data);
				}
			});
		}
		// editCar: function(req, res){
		// 	carsModel.find({_id: req.params.id}, function(err, cars){
		// 		if(err){
		// 			console.log("ERR ERR while trying to edit car!");
		// 		}
		// 		res.render("editCar", {cars: cars});
		// 	});
		// },
		// updateCar: function(req, res){
		// 	console.log("POST DATA:", req.body);
		// 	carsModel.update({_id: req.params.id}, { $set: { make: req.body.make, model: req.body.model, year: req.body.year }}, function(err, cars){
		// 		if(err){
		// 			console.log("ERR ERR while trying to update car!");
		// 		} else {
		// 			res.redirect("/cars");
		// 		}
		// 	});
		// }
	}
})();