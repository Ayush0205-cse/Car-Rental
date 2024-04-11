const { type } = require("jquery");
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    first_name : {type:String, required:true} ,
    last_name : {type:String, required:true} ,
    mobile_num : {type:Number, required:true} ,
    email : {type:String, required:true},
    company : {type:String, required:true},
    model : {type:String, required:true},
    year : {type:Number, required:true},
    image : {type:String, required:true} ,
    rcbook : {type:String, required:true},
    rentPerHour : {type:Number, required:true}, 
    capacity : {type:Number, required:true},
    fuelType : {type:String, required:true} , 
    bookedTimeSlots : [
        {
            from : {type:String, required:true},
            to : {type:String, required:true}
        }
    ] , 

    
    city : {type:String, required:true}


}, {timestamps : true}

)
const carModel = mongoose.model('cars' , carSchema)
module.exports = carModel