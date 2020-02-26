import { Controller, Get } from '@nestjs/common';
import { Friend } from '@libs/db/models/friend.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Friend,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '友链列表' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '编辑友链' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '新建友链' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除友链' })
      ]
    },
    findOne: false,
  }
})

@Controller('friends')
@ApiTags('友链')
export class FriendsController {
  constructor(
    @InjectModel(Friend) private readonly model: ReturnModelType<typeof Friend>,
  ) { }

  @Get('option')
  option() {
    return {
      index: true,
      stripe: true,
      dialogType: 'drawer',
      dialogWidth: '30%',
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '主页标题',
          prop: 'title',
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
          label: '主页链接',
          prop: 'link',
          span: 24
        },
      ]
    }
  }
}
