/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 20:11:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\messages\messages.controller.ts
 */ 
import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Message } from '@libs/db/models/message.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.model';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: Message,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '留言列表' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除留言' })
      ]
    },
    findOne: false,
    update: false,
    create: false,
  }
})

@Controller('messages')
@ApiTags('留言')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
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
