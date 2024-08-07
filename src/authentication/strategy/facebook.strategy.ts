import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.getOrThrow("FACEBOOK_CLIENT_ID"),
      clientSecret: configService.getOrThrow("FACEBOOK_CLIENT_SECRET"),
      callbackURL: configService.getOrThrow("FACEBOOK_CALLBACK_URL"),
      scope: "email, public_profile",
      profileFields: ["id", "emails", "name", "picture"]
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void
  ): Promise<any> {
    const { name, id, photos } = profile;
    const user = {
      account: id,
      username: name.givenName + " " + name.familyName,
      avatar: photos[0].value
    };

    done(null, user);
  }


}