import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController()

userRouter.post('/create', userController.create)
userRouter.get('/listAll', userController.listAll);

export default userRouter;
