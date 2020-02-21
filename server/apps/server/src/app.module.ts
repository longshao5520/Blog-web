import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from 'libs/common/src';
import { BlogsModule } from './blogs/blogs.module';
import { PhotosModule } from './photos/photos.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    CommonModule,
    BlogsModule,
    PhotosModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
