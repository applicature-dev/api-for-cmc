import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ReportModule } from './report/report.module';
import { ThrottlerModule } from "@nestjs/throttler";
// import { AuthService } from './auth/auth.service';
// import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
// import { UserService } from './user/user.service';
// import { JwtService } from '@nestjs/jwt';
// import { AuthMiddleware } from './middleware/auth.middleware';
// import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './roles/role.guard';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://localhost/users',
      { 
        useNewUrlParser: true,
        // useUnifiedTopology: true,
      },
    ),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    UserModule,
    AuthModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    AppService, 
    UserModule, 
  ],
})
export class AppModule {}
