import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Photo } from '@libs/db/models/photo.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Photo,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '列表' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '详情' })
      ]
    },
    update: false,
    create: false,
    delete: false,
  }
})

@Controller('photos')
@ApiTags('相片')
export class PhotosController {
  constructor(
    @InjectModel(Photo) private readonly model: ReturnModelType<typeof Photo>,
  ) { }
}
