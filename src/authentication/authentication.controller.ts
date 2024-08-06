import { Controller, Get, HttpStatus, Req, UseGuards } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";

@Controller("auth")
@ApiTags("Authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {
  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    console.log(req.user);
    return req.user;
  }
}
