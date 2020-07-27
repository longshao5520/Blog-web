/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-27 09:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\comments\comments.controller.ts
 */ 
import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Comment } from '@libs/db/models/comment.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Blog } from '@libs/db/models/blog.model';
import { User } from '@libs/db/models/user.model';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: Comment,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '评论列表' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除评论' })
      ]
    },
    findOne: false,
    update: false,
    create: false,
  }
})

@Controller('comments')
@ApiTags('评论')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class CommentsController {
  constructor(
    @InjectModel(Comment) private readonly model: ReturnModelType<typeof Comment>,
    @InjectModel(Blog) private readonly blogModel: ReturnModelType<typeof Blog>,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) { }

  @Get('option')
  async option() {
    const blog = (await this.blogModel.find()).map(v => ({
      label: v.title,
      value: v._id
    }))
    const user = (await this.userModel.find()).map(v => ({
      label: v.username,
      value: v._id
    }))
    return {
      index: true,
      stripe: true,
      translate: false,
      addBtn: false,
      editBtn: false,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '所属文章',
          prop: 'blog',
          dicData: blog,
        },
        {
          label: '评论者',
          prop: 'author',
          dicData: user,
        },
        {
          label: '评论内容',
          prop: 'connect'
        },
      ]
    }
  }
}
