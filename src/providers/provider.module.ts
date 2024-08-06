import { Module } from "@nestjs/common";

import { JwtProvider } from "@provider/jwt.provider";
import { MysqlProvider } from "@provider/mysql.provider";

@Module({
  imports: [MysqlProvider, JwtProvider],
  exports: [MysqlProvider, JwtProvider]
})
export class ProviderModule {
}
