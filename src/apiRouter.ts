import express, { Request, Response, Router } from 'express';

const apiRouter = Router();

// Define las rutas para las API aquí
apiRouter.get('/test', (req: Request, res: Response) => {
  res.send('Respuesta desde ruta1');
});

apiRouter.get('/test2', (req: Request, res: Response) => {
  res.send('Respuesta desde ruta2');
});

// Exporta el enrutador
export default apiRouter;
