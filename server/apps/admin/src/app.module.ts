/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 19:56:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\app.module.ts
 */ 
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';
import { MulterModule } from '@nestjs/platform-express';
import { AdminsModule } from './admins/admins.module';
import { CatesModule } from './cates/cates.module';
import { CommonModule } from 'libs/common/src';
import { FriendsModule } from './friends/friends.module';
import { HomeModule } from './home/home.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET
            }
          })
        }
      }
    }),
    HomeModule,
    CatesModule,
    BlogsModule,
    PhotosModule,
    CommentsModule,
    MessagesModule,
    UsersModule,
    AdminsModule,
    FriendsModule,
    PassportModule
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtStrategy],
})
export class AppModule { }
