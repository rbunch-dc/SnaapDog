var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stray_entrySchema = new Schema({
	photo: { type: Array, required: true},
	location: {
		coord: {
			lat: { type: Number },
			lng: { type: Number }
		},
		address: {
			line1: { type: String },
			city: { type: String },
			state: { type: String },
			zip: { type: String }
		},
		status: { type: Number, required: true },
		size: { type: Number, required: true },
		color: {  type: Number, required: true },
		hair: { type: Number, required: true}, 
		breed: { type: Array }
		tag_id: { type: String },
		description: { type: String }
	}, {timestamps: true} 
});

module.exports = mongoose.model('stray_entry', stray_entrySchema);