import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Message } from '@libs/db/models/message.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Message,
  routes: {
    find: {
      decorators:[
        ApiOperation({title: '留言列表'})
      ]
    },
    findOne: {
      decorators:[
        ApiOperation({title: '留言详情'})
      ]
    },
    update: {
      decorators:[
        ApiOperation({title: '修改留言'})
      ]
    },
    create: {
      decorators:[
        ApiOperation({title: '新建留言'})
      ]
    },
    delete: {
      decorators:[
        ApiOperation({title: '删除留言'})
      ]
    },
  }
})

@Controller('messages')
@ApiUseTags('留言')
export class MessagesController {
  constructor(@InjectModel(Message) private readonly model) {}

  @Get('option')
  option(){
    return{
      border:true,
      index:true,
      indexLabel:'序号',
      page:false,
      align:'center',
      menuAlign:'center',
      title:'留言管理',
      column:[
        {
          label:'作者',
          prop:'author'
        },
        {
          label:'评论内容',
          prop:'connect'
        },
      ]
    }
  }
}
