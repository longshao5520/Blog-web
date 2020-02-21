import { Controller, Body, Post } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { Admin } from '@libs/db/models/admin.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Admin,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '管理员列表' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '管理员详情' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '编辑管理员' })
      ]
    },
    create: false,
    delete: false,
  }
})

@Controller('admins')
@ApiTags('管理员')
export class AdminsController {
  constructor(
    @InjectModel(Admin) private readonly model: ReturnModelType<typeof Admin>,
  ) { }
}
