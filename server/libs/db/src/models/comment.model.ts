import { prop, modelOptions} from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Comment{
  @ApiModelProperty({description: '博客id'})
  @prop()
  blogid: string

  @ApiModelProperty({description: '用户id'})
  @prop()
  userid: string

  @ApiModelProperty({description: '评论内容'})
  @prop()
  connect: string
}