import { Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "@model/user/user.service";
import { User } from "@prisma/client";

@Controller("auth")
@ApiTags("Authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService, private readonly userService: UserService) {
  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    const userInfo: User = await this.userService.userLogin({ ...req.user, type: "facebook" } as User);
    return { token: await this.authenticationService.generateJwt(userInfo) };
  }

  @Get("/google")
  @UseGuards(AuthGuard("google"))
  async googleLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/google/redirect")
  @UseGuards(AuthGuard("google"))
  async googleLoginRedirect(@Req() req: Request): Promise<any> {
    const userInfo: User = await this.userService.userLogin({ ...req.user, type: "google" } as User);
    return { token: await this.authenticationService.generateJwt(userInfo) };
  }

  // @Post("logout")
  // logout(@Req() req: Request) {
  //   req.session.destroy(() => {
  //     return "Logged out successfully";
  //   });
  // }

  @Get("/get")
  async getSomething() {
    return "GET";
  }
}
