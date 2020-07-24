/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 21:12:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\app.controller.ts
 */

import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiProperty, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Admin, AdminDocument } from '@libs/db/models/admin.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CurrentUser } from './auth/admin.decorator';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

class LoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@Controller()
export class AppController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Admin) private readonly adminModel: ReturnModelType<typeof Admin>,
  ) {}

  @Post('upload')
  @ApiOperation({ summary: '上传' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file) {
    return file;
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @CurrentUser() user: AdminDocument) {
    return {
      token: this.jwtService.sign(String(user._id))
    }
  }
}
