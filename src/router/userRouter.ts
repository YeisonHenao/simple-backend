import express, { Request, Response, Router} from 'express'
import UserController from '../controllers/userController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', (req: Request, res: Response) => {
  res.send('Respuesta desde userRouter');
});

userRouter.get('/list', userController.list)

userRouter.get('/users/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = userController.getUserById(userId);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
});

export default userRouter