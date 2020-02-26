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

@Module({
  imports: [
    CommonModule,
    HomeModule,
    BlogsModule,
    CatesModule,
    FriendsModule,
    PhotosModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
