/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-09 14:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\server\src\messages\messages.controller.ts
 */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Message } from '@libs/db/models/message.model';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/models/user.model';

export class Dto {
  @ApiProperty()
  id: string;
}

@Crud({
  model: Message,
  routes: {
    find: false,
    create: { decorators: [ApiOperation({ summary: '新建留言' })] },
    findOne: false,
    update: false,
    delete: false,
  },
})
@Controller('messages')
@ApiTags('留言')
export class MessagesController {
  constructor(
    @InjectModel(Message)
    private readonly model: ReturnModelType<typeof Message>,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  @Get('list')
  async list() {
    let data = await this.model.find().populate({path: 'author', select: 'username'}).sort({_id: -1});
    return data;
  }
}
