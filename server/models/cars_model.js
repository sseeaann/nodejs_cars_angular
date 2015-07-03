// require mongoose and connect it to the DB
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
// establish a schema
var CarsSchema = new mongoose.Schema({
	make: { type: String, trim: true },
	model: { type: String, trim: true },
	year: { type: Number }
});
// connect the collection and model schema
mongoose.model('cars', CarsSchema);

// Validation 
CarsSchema.path("make").required(true, "Make is required");
CarsSchema.path("model").required(true, "Model is required");
CarsSchema.path("year").required(true, "Year is required");