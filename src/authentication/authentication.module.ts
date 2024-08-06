import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserService } from "@model/user/user.service";
import { FacebookStrategy } from "@authentication/strategy/facebook.strategy";
import { PrismaService } from "@prisma/prisma.service";

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserService, FacebookStrategy, PrismaService],
})
export class AuthenticationModule {}
