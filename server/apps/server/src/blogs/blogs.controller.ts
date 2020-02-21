import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Blog } from '@libs/db/models/blog.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Blog,
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

@Controller('blogs')
@ApiTags('文章')
export class BlogsController {
  constructor(
    @InjectModel(Blog) private readonly model: ReturnModelType<typeof Blog>,
    // @InjectModel(Cate) private readonly catesModel: ReturnModelType<typeof Cate>,
  ) { }

}
