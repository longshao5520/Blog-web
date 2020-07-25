/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-25 21:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\server\src\messages\messages.controller.ts
 */

import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Message } from '@libs/db/models/message.model';
import {
  ApiOperation,
  ApiTags,
  ApiProperty,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'apps/admin/src/auth/admin.decorator';
import { UserDocument } from '@libs/db/models/user.model';

export class Dto {
  @ApiProperty()
  connect: string;
}

// @Crud({
//   model: Message,
//   routes: {
//     find: false,
//     create: { decorators: [ApiOperation({ summary: '新建留言' }), UseGuards(AuthGuard('jwt'))] },
//     findOne: false,
//     update: false,
//     delete: false,
//   },
// })
@Controller('messages')
@ApiTags('留言')
export class MessagesController {
  constructor(
    @InjectModel(Message)
    private readonly model: ReturnModelType<typeof Message>,
  ) {}

  @Get()
  @ApiOperation({ summary: '留言列表' })
  async index() {
    let data = await this.model
      .find()
      .populate({ path: 'author', select: 'username' })
      .sort({ _id: -1 });
    return data;
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async add(@Body() dto: Dto, @CurrentUser() user: UserDocument) {
    const { connect } = dto;
    await this.model.create({
      connect,
      author: user._id,
    });
  }
}
