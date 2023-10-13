const mongoose = require('mongoose')

const rutasSchema = new mongoose.Schema({
    name : { type: String , required : true },
    category : { type: String , required : true },
    date : { type: String , required: true },
    description : { type: String , default: 'Sin descripcion' },
    image : { type:String },
    place : { type:String },
    price : { type: Number , required : true },
    capacity : { type: Number , required : true },
    assistance : { type: Number },
    estimate : { type: Number }
})

const Rutas = mongoose.model( 'rutas', rutasSchema )
module.exports = Rutas