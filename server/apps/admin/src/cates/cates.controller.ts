/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 20:11:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\cates\cates.controller.ts
 */ 
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Cate } from '@libs/db/models/cate.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: Cate,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '分类列表' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '编辑分类' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '新建分类' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除分类' })
      ]
    },
    findOne: false,
  }
})

@Controller('cates')
@ApiTags('分类')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class CatesController {
  constructor(
    @InjectModel(Cate) private readonly model: ReturnModelType<typeof Cate>,
  ) { }

  @Get('option')
  option() {
    return {
      index: true,
      stripe: true,
      dialogType: 'drawer',
      dialogWidth: '30%',
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '标题',
          prop: 'title',
          span: 24
        },
        {
          label: '封面',
          prop: 'cover',
          type: 'upload',
          listType: 'picture-img',
          action: '/upload',
          width: '120',
          span: 6
        }
      ]
    }
  }
}
