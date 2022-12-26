import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.js";

export class UserController {
  async index(request: Request, response: Response, next: NextFunction) {
    const user = await User.find();
    response.send(user);
  }
}
