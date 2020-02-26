import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Home } from '@libs/db/models/home.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Home,
  routes: {
    findOne: false,
    create: false,
    delete: false,
    update: false
  }
})

@Controller('home')
@ApiTags('Home')
export class HomeController {
  constructor(
    @InjectModel(Home) private readonly model: ReturnModelType<typeof Home>,
  ) { }
}
