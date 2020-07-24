/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 20:11:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\home\home.controller.ts
 */ 
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Home } from '@libs/db/models/home.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: Home,
  routes: {
    findOne: false,
    create: false,
    delete: false,
  }
})

@Controller('home')
@ApiTags('Home')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class HomeController {
  constructor(
    @InjectModel(Home) private readonly model: ReturnModelType<typeof Home>,
  ) { }

  @Get('option')
  option() {
    return {
      index: true,
      stripe: true,
      addBtn: false,
      delBtn: false,
      dialogType: 'drawer',
      dialogWidth: '30%',
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '标题',
          prop: 'title',
          width: 200,
          span: 24
        },
        {
          label: '描述',
          prop: 'subtitle',
          span: 24
        },
        {
          label: '头像',
          prop: 'img',
          span: 24
        },
        {
          label: '封面',
          prop: 'cover',
          type: 'upload',
          listType: 'picture-img',
          action: '/upload',
          width: 200,
          span: 6
        },
      ]
    }
  }
}
