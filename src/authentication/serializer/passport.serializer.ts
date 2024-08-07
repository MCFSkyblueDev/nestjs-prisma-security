/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "@prisma/client";
import { UserService } from "@model/user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    private readonly userService: UserService
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log("Serializer User");
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user: User = await this.userService.user(payload.id);
    console.log("Deserialize User");
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}