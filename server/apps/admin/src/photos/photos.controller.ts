/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 20:18:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\photos\photos.controller.ts
 */ 
import { Controller, Get, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Photo } from '@libs/db/models/photo.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: Photo,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '列表' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '修改' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '新建' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除' })
      ]
    },
    findOne: false,
  }
})

@Controller('photos')
@ApiTags('相片')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class PhotosController {
  constructor(
    @InjectModel(Photo) private readonly model: ReturnModelType<typeof Photo>,
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
          label: '名称',
          prop: 'tpmc',
          span: 24
        },
        {
          label: '图片路径',
          prop: 'file',
          type: 'upload',
          listType: 'picture-img',
          action: '/upload',
          width: '120',
        },
      ]
    }
  }
}
