const Rutas = require('../models/rutasModel')

const rutasController = {
    getRutas: async(req , res) => {
        try {
            const rutas = await Rutas.find()
            res.json ( { mensaje: 'Rutas de Strava' , rutas: rutas } )
        } catch (error) {
            return res.status(500).json( {success:false }) 
        }
             
    },
    addRutas: async(req, res) => {

        try {
            const newRuta = await Rutas.create(req.body)
            return res.status(201).json( {success:true, ruta: newRuta })
        } catch (error) {
            return res.status(500).json( {success:false })       
        }
    }
}

module.exports = rutasController