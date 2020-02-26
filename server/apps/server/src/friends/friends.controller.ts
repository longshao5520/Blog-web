import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Friend } from '@libs/db/models/friend.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Friend,
  routes: {
    findOne: false,
    update: false,
    create: false,
    delete: false,
  }
})

@Controller('friends')
@ApiTags('友链')
export class FriendsController {
  constructor(
    @InjectModel(Friend) private readonly model: ReturnModelType<typeof Friend>,
  ) { }
}
