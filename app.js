const express = require('express')

const app = express()

const port = 8080

app.get('/',(req,res)=>{
    res.send('websockets')
})

const servidor = app.listen(port,()=>{
    console.log(`Servidor en línea en el puerto ${port}`)
})

servidor.on(Error,(err)=>{
    console.log(err)
})