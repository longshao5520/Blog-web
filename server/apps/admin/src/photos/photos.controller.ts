import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Photo } from '@libs/db/models/photo.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Photo,
  routes: {
    find: {
      decorators:[
        ApiOperation({title: '列表'})
      ]
    },
    findOne: {
      decorators:[
        ApiOperation({title: '详情'})
      ]
    },
    update: {
      decorators:[
        ApiOperation({title: '修改'})
      ]
    },
    create: {
      decorators:[
        ApiOperation({title: '新建'})
      ]
    },
    delete: {
      decorators:[
        ApiOperation({title: '删除'})
      ]
    },
  }
})

@Controller('photos')
@ApiUseTags('相片')
export class PhotosController {
  constructor(@InjectModel(Photo) private readonly model) {}

  @Get('option')
  option(){
    return{
      border:true,
      index:true,
      indexLabel:'序号',
      page:false,
      align:'center',
      menuAlign:'center',
      title:'相片管理',
      column:[
        {
          label:'名称',
          prop:'tpmc',
          row:'true'
        },
        {
          label:'图片路径',
          prop:'file',
          type:'upload',
          listType:'picture-img',
          action:'/upload',
          width: '120',
        },
      ]
    }
  }
}
