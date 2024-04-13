import * as users from '../data/users.json'

export default class UserController {
  list(){
    return users
  }

  getUserById(id: string) {
    const user = users.find((user: any) => user.id === parseInt(id));
    console.log(user)
    return user;
  }

}