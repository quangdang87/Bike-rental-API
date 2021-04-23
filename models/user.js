/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

var mongoose=require('mongoose');

var schema=mongoose.Schema;

const userSchema=new schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: String,
	pwd: String,
	username: String
});

module.exports=mongoose.model('User',userSchema);