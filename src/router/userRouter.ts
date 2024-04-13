import express, { Request, Response, Router} from 'express'

const userRouter = Router();

userRouter.get('/list', (req: Request, res: Response) => {
  res.send('Lista de usuarios')
})

export default userRouter