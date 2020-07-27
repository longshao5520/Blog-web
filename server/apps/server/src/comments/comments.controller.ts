/*
 * @Author: your name
 * @Date: 2020-07-27 09:15:40
 * @LastEditTime: 2020-07-27 10:44:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\server\src\comments\comments.controller.ts
 */

import { Controller, Get, Post, UseGuards, Body, Query } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Comment } from '@libs/db/models/comment.model';
import { ReturnModelType } from '@typegoose/typegoose';
import {
  ApiOperation,
  ApiTags,
  ApiProperty,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'apps/admin/src/auth/admin.decorator';
import { UserDocument } from '@libs/db/models/user.model';

export class commentDto {
  @ApiProperty()
  connect: string;

  @ApiProperty()
  blogId: string;
}

export class commentQDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  limit: number;
}

@Controller('comments')
@ApiTags('评论')
export class CommentsController {
  constructor(
    @InjectModel(Comment)
    private readonly commentModel: ReturnModelType<typeof Comment>,
  ) {}

  @Get()
  @ApiOperation({ summary: '评论列表' })
  async index(@Query() dto: commentQDto) {
    let data = await this.commentModel
      .find({blog: dto.id})
      .populate({ path: 'author', select: 'username' })
      .limit(Number(dto.limit))
      .sort({ _id: -1 });
    return data;
  }

  @Post()
  @ApiOperation({ summary: '评论' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async add(@Body() dto: commentDto, @CurrentUser() user: UserDocument) {
    const { connect, blogId } = dto;
    await this.commentModel.create({
      connect,
      blog: blogId,
      author: user._id,
    });
  }
}
