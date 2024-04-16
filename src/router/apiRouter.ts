import { Request, Response, Router } from 'express';
import userRouter from './userRouter';

const apiRouter = Router();

// Define las rutas para las API aquí
apiRouter.get('/test', (req: Request, res: Response) => {
  res.send('Respuesta desde ruta1');
});

apiRouter.get('/', (req: Request, res: Response) => {
  res.send('Bienvenido al proyecto de backend')
})

apiRouter.use('/user', userRouter);


// Exporta el enrutador
export default apiRouter;
