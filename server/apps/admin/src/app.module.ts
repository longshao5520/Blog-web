import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { CommentsModule } from './comments/comments.module';
import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';
import { MulterModule } from '@nestjs/platform-express';
import { AdminsModule } from './admins/admins.module';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads'
    }),
    DbModule,
    UsersModule,
    BlogsModule,
    CommentsModule,
    MessagesModule,
    PhotosModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
