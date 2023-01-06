import { Request, Response } from "express";
import { User } from "../entities/user.entity.js";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken-esm";

export class AuthController {
  async signUp(req: Request, res: Response) {
    let user = await User.create(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    user.save();
    res.send(user);
  }

  async logIn(req: Request, res: Response) {
    const user = await User.findOneBy({ email: req.body.email });
    if (!user) {
      return res.status(404).send("No user associated with email given");
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    result
      ? res.status(200).send({
          token: jwt.sign(
            { sub: user.id, email: user.email },
            process.env.SECRET_KEY!,
            {
              expiresIn: "1h",
            }
          ),
        })
      : res.status(401).send("invalid credentials");
  }
}
