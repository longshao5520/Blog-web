import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Comment } from '@libs/db/models/comment.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Comment,
  routes: {
    find: {
      decorators:[
        ApiOperation({title: '评论列表'})
      ]
    },
    findOne: {
      decorators:[
        ApiOperation({title: '评论详情'})
      ]
    },
    update: {
      decorators:[
        ApiOperation({title: '修改博客'})
      ]
    },
    create: {
      decorators:[
        ApiOperation({title: '新建评论'})
      ]
    },
    delete: {
      decorators:[
        ApiOperation({title: '删除评论'})
      ]
    },
  }
})

@Controller('comments')
@ApiUseTags('评论')
export class CommentsController {
  constructor(@InjectModel(Comment) private readonly model) {}
  
  @Get('option')
  option(){
    return{
      title:'评论管理',
      column:[
        {
          label:'博客id',
          prop:'blogid'
        },
        {
          label:'用户id',
          prop:'userid'
        },
        {
          label:'评论内容',
          prop:'connect'
        },
      ]
    }
  }
}
