import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { Admin } from '@libs/db/models/admin.model';

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
    create: {
      decorators: [
        ApiOperation({ summary: '新建管理员' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除管理员' })
      ]
    },
  }
})

@Controller('admins')
@ApiTags('管理员')
export class AdminsController {
  constructor(@InjectModel(Admin) private readonly model) { }

  @Get('option')
  option() {
    return {
      border: true,
      index: true,
      indexLabel: '序号',
      page: false,
      align: 'center',
      menuAlign: 'center',
      title: '管理员管理',
      column: [
        {
          label: '用户名',
          prop: 'username',
        },
        {
          label: '密码',
          prop: 'password',
        },
      ]
    }
  }
}
