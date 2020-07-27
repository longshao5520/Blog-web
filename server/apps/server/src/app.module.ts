import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from 'libs/common/src';
import { BlogsModule } from './blogs/blogs.module';
import { PhotosModule } from './photos/photos.module';
import { MessagesModule } from './messages/messages.module';
import { CatesModule } from './cates/cates.module';
import { FriendsModule } from './friends/friends.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    CommonModule,
    HomeModule,
    BlogsModule,
    CatesModule,
    FriendsModule,
    PhotosModule,
    MessagesModule,
    AuthModule,
    CommentsModule,
  ],
  controllers: [AppController, CommentsController],
  providers: [AppService],
})
export class AppModule { }
