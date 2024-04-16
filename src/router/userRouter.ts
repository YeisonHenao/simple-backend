import express, { Request, Response, Router} from 'express'
import UserController from '../controllers/userController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', (req: Request, res: Response) => {
  res.send('Respuesta desde userRouter');
});

userRouter.get('/list', userController.list)

userRouter.get('/:id', userController.getUserById);

export default userRouter