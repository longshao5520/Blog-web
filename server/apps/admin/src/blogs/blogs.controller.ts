import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Blog } from '@libs/db/models/blog.model';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
  model: Blog,
  routes: {
    find: {
      decorators:[
        ApiOperation({title: '文章列表'})
      ]
    },
    findOne: {
      decorators:[
        ApiOperation({title: '文章详情'})
      ]
    },
    update: {
      decorators:[
        ApiOperation({title: '编辑文章'})
      ]
    },
    create: {
      decorators:[
        ApiOperation({title: '新建文章'})
      ]
    },
    delete: {
      decorators:[
        ApiOperation({title: '删除文章'})
      ]
    },
  }
})

@Controller('blogs')
@ApiUseTags('文章')
export class BlogsController {
  constructor(@InjectModel(Blog) private readonly model) {}

  @Get('option')
  option(){
    return{
      border:true,
      index:true,
      indexLabel:'序号',
      page:false,
      align:'center',
      menuAlign:'center',
      title:'文章管理',
      column:[
        {
          label:'标题',
          prop:'title'
        },
        {
          label:'标签',
          prop:'label'
        },
        {
          label:'内容',
          prop:'connect',
          // formslot:true
        },
        {
          label:'封面',
          prop:'cover'
        },
        {
          label:'作者',
          prop:'author'
        },
      ]
    }
  }
}
