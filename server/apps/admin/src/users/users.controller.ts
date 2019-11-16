import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
  model: User,
  routes: {
    find: {
      decorators:[
        ApiOperation({title: '用户列表'})
      ]
    },
    findOne: {
      decorators:[
        ApiOperation({title: '用户详情'})
      ]
    },
    update: {
      decorators:[
        ApiOperation({title: '修改用户'})
      ]
    },
    create: {
      decorators:[
        ApiOperation({title: '新建用户'})
      ]
    },
    delete: {
      decorators:[
        ApiOperation({title: '删除用户'})
      ]
    },
  }
})

@Controller('users')
@ApiUseTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}

  @Get('option')
  option(){
    return{
      title:'用户管理',
      column:[
        {
          label:'用户名',
          prop:'username'
        },
        {
          label:'真实姓名',
          prop:'ealname'
        },
        {
          label:'生日',
          prop:'birthday'
        },
        {
          label:'性别',
          prop:'sex'
        },
        {
          label:'手机号',
          prop:'phone'
        },
        {
          label:'邮箱',
          prop:'email'
        },
        {
          label:'QQ',
          prop:'qq'
        },
      ]
    }
  }
}
