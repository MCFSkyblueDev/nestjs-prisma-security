import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { UserService } from "@model/user/user.service";
import { FacebookStrategy } from "@authentication/strategy/facebook.strategy";
import { PrismaService } from "@prisma/prisma.service";
import { GoogleStrategy } from "@authentication/strategy/google.strategy";
import { SessionSerializer } from "@authentication/serializer/passport.serializer";

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserService, FacebookStrategy, GoogleStrategy, PrismaService, SessionSerializer]
})
export class AuthenticationModule {
}
