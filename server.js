const express = require('express')
require('dotenv').config()
require('./config/database.js')

const rutasRouter = require('./routes/rutasRouter')

// app.use ( express.json())
const app = express()
const PORT = process.env.PORT || 5000

app.set("port", PORT)

app.get('/', (req,res)=>{res.send("servidor creado")})
app.use('/api' , rutasRouter )

app.listen(PORT, ()=>{console.log("Servidor corriendo en puerto: "+app.get('port'))})