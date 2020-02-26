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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
