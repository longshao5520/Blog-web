import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Cate } from '@libs/db/models/cate.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Cate,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '文章列表' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '文章详情' })
      ]
    },
    update: false,
    create: false,
    delete: false,
  }
})

@Controller('cates')
@ApiTags('分类')
export class CatesController {
  constructor(
    @InjectModel(Cate) private readonly model: ReturnModelType<typeof Cate>,
  ) { }
}
