import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import { User } from "../../entities/user.entity.js";
import dotenv from "dotenv";

dotenv.config();
class PassportService {
  public static init() {
    return passport.use(
      new Strategy(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.SECRET_KEY,
        },
        this.verify
      )
    );
  }

  private static async verify(jwtPayload: any, done: any): Promise<void> {
    const user = await User.find(jwtPayload.id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  }
}

export default PassportService.init();
