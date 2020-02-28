import { Controller, Get } from '@nestjs/common';
import { Home } from '@libs/db/models/home.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

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
