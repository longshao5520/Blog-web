import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: User,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '用户列表' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除用户' })
      ]
    },
    findOne: false,
    update: false,
    create: false,

  }
})

@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
  ) { }

  @Get('option')
  option() {
    return {
      index: true,
      stripe: true,
      addBtn: false,
      editBtn: false,
      dialogType: 'drawer',
      dialogWidth: '30%',
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '用户名',
          prop: 'username'
        },
        // {
        //   label: '真实姓名',
        //   prop: 'ealname'
        // },
        // {
        //   label: '生日',
        //   prop: 'birthday'
        // },
        // {
        //   label: '性别',
        //   prop: 'sex'
        // },
        // {
        //   label: '手机号',
        //   prop: 'phone'
        // },
        // {
        //   label: '邮箱',
        //   prop: 'email'
        // },
        // {
        //   label: 'QQ',
        //   prop: 'qq'
        // },
      ]
    }
  }
}
