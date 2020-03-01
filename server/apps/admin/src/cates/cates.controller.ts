import { Controller, Get } from '@nestjs/common';
import { Cate } from '@libs/db/models/cate.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

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