import express, { Request, Response } from 'express';
import apiRouter from './apiRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para redirigir las solicitudes a /api
app.use('/api', apiRouter);

// Manejar otras rutas
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
