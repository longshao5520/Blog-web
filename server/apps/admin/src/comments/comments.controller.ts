import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Comment } from '@libs/db/models/comment.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Blog } from '@libs/db/models/blog.model';
import { User } from '@libs/db/models/user.model';

@Crud({
  model: Comment,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '评论列表' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '评论详情' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '修改博客' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '新建评论' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除评论' })
      ]
    },
  }
})

@Controller('comments')
@ApiTags('评论')
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
