import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Message } from '@libs/db/models/message.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.model';

@Crud({
  model: Message,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '留言列表' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '留言详情' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '修改留言' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '新建留言' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除留言' })
      ]
    },
  }
})

@Controller('messages')
@ApiTags('留言')
export class MessagesController {
  constructor(
    @InjectModel(Message) private readonly model: ReturnModelType<typeof Message>,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) { }

  @Get('option')
  async option() {
    const user = (await this.userModel.find()).map(v => ({
      label: v.username,
      value: v._id
    }))
    return {
      index: true,
      stripe: true,
      editBtn: false,
      addBtn: false,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '作者',
          prop: 'author',
          dicData: user
        },
        {
          label: '评论内容',
          prop: 'connect'
        },
      ]
    }
  }
}
