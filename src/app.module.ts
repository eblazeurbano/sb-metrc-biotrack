import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './packages/package.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:jtkdfMEbxDADF7H6@sb-metrc-biotrack.qilidz4.mongodb.net/sb-metrc-biotrack',
      database: 'sb-metrc-biotrack',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    PackageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
