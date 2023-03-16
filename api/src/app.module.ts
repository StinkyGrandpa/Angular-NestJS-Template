import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormConfig';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    //   ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: [
    //     // Order is important, as it will take the first value that
    //     // appears if there is the same variable in multiple files.
    //     '.env.dev',
    //     '.env'
    //   ]
    // }),
    // TypeOrmModule.forFeature([CheckIn]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
