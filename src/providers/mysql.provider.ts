import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.getOrThrow("SQL_HOST"),
        port: +configService.getOrThrow("SQL_PORT"),
        database: configService.getOrThrow("SQL_DATABASE"),
        username: configService.getOrThrow("SQL_USERNAME"),
        password: configService.getOrThrow("SQL_PASSWORD"),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow("SQL_SYNC")=== "true",
      }),
      inject: [ConfigService]
    })
  ]
})
export class MysqlProvider {
}
