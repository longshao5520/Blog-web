import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Blog{
  @ApiModelProperty({description: '标题'})
  @prop()
  title: string

  @ApiModelProperty({description: '标签'})
  @prop()
  label: string

  @ApiModelProperty({description: '内容'})
  @prop()
  connect: string

  @ApiModelProperty({description: '封面'})
  @prop()
  cover: string

  @ApiModelProperty({description: '作者'})
  @prop()
  author: string
}