import * as users from '../data/users.json'
import { Request, Response } from 'express';

export default class UserController {
  list(req: Request, res: Response){

    console.log('Se accedio a la ruta /user/list')
    res.json(users);
  }

  getUserById(req: Request, res: Response) {

    console.log('Se accedio a la ruta /users/:id para buscar un ID especifico')
    const userId = req.params.id;
    const user = users.find((user: any) => user.id == parseInt(userId))
    return user
  }

}