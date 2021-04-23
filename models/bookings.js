/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

var mongoose=require('mongoose');

var schema=mongoose.Schema;

const BookingSchema=new schema({
	_id: mongoose.Schema.Types.ObjectId,
	uid: schema.Types.ObjectId,
	vgid: Number,
	v_id: schema.Types.ObjectId,
	startDate: Date,
	endDate: Date
});

module.exports=mongoose.model('booking',BookingSchema);