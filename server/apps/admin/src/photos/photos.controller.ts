import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Photo } from '@libs/db/models/photo.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

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
