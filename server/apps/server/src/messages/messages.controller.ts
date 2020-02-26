import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Message } from '@libs/db/models/message.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Message,
  routes: {
    find: false,
    create: false,
    findOne: false,
    update: false,
    delete: false,
  }
})

@Controller('messages')
@ApiTags('留言')
export class MessagesController {
  constructor(
    @InjectModel(Message) private readonly model: ReturnModelType<typeof Message>,
    // @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) { }
}
