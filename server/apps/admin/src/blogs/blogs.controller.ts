import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Blog } from '@libs/db/models/blog.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { Cate } from '@libs/db/models/cate.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Blog,
  routes: {
    find: {
      decorators: [
        ApiOperation({ summary: '文章列表' })
      ]
    },
    findOne: {
      decorators: [
        ApiOperation({ summary: '文章详情' })
      ]
    },
    update: {
      decorators: [
        ApiOperation({ summary: '编辑文章' })
      ]
    },
    create: {
      decorators: [
        ApiOperation({ summary: '新建文章' })
      ]
    },
    delete: {
      decorators: [
        ApiOperation({ summary: '删除文章' })
      ]
    },
  }
})

@Controller('blogs')
@ApiTags('文章')
export class BlogsController {
  constructor(
    @InjectModel(Blog) private readonly model: ReturnModelType<typeof Blog>,
    @InjectModel(Cate) private readonly catesModel: ReturnModelType<typeof Cate>,
  ) { }

  @Get('option')
  async option() {
    const cate = (await this.catesModel.find()).map(v => ({
      label: v.title,
      value: v._id
    }))
    return {
      index: true,
      stripe: true,
      addBtn: false,
      editBtn: false,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '标题',
          prop: 'title',
          span: 12
        },
        {
          label: '分类',
          prop: 'cate',
          dicData: cate,
          span: 4
        },
        {
          label: '标签',
          prop: 'label',
          span: 4
        },
        {
          label: '作者',
          prop: 'author',
          span: 4
        },
        {
          label: '封面',
          prop: 'cover',
          type: 'upload',
          listType: 'picture-img',
          action: '/upload',
          width: '120',
          span: 4
        },
      ]
    }
  }
  @Get('formOption')
  async formOption() {
    const cate = (await this.catesModel.find()).map(v => ({
      label: v.title,
      value: v._id
    }))
    return {
      translate: false,
      labelWidth: 60,
      emptyText: '返回',
      group: [
        {
          label: '基本信息',
          prop: 'group1',
          column: [{
            label: '标题',
            prop: 'title',
            span: 12
          },
          {
            label: '分类',
            prop: 'cate',
            type: 'select',
            dicData: cate,
            span: 6
          },
          {
            label: '标签',
            prop: 'label',
            span: 6
          },
          // {
          //   label: '作者',
          //   prop: 'author',
          //   span: 4
          // },
          {
            label: '封面',
            prop: 'cover',
            type: 'upload',
            listType: 'picture-img',
            action: '/upload',
            width: '500'
          },]
        }, {
          label: '内容',
          prop: 'group2',
          column: [{
            hide: true,
            labelPosition: 'top',
            prop: 'connect',
            formslot: true,
            span: 24
          }]
        }
      ]
    }
  }
}
