import express from 'express'
import apiRouter from './router/apiRouter'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware para redirigir las solicitudes a /api
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
