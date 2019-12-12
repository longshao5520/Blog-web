import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model'
import { Blog } from './models/blog.model'
import { Photo } from './models/photo.model'
import { Comment } from './models/comment.model'
import { Message } from './models/message.model'
import { Admin } from './models/admin.model'


const models = TypegooseModule.forFeature([User, Blog, Comment, Photo, Message, Admin])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/Blog-web',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
