import { prop, modelOptions} from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Message{

  @ApiModelProperty({description: '用户id'})
  @prop()
  userid: string

  @ApiModelProperty({description: '评论内容'})
  @prop()
  connect: string
}