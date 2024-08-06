import { Injectable } from "@nestjs/common";
import { UserService } from "@model/user/user.service";


@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {
  }
}
