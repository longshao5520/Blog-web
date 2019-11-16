import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Photo{
  @ApiModelProperty({description: '名称'})
  @prop()
  tpmc: string

  @ApiModelProperty({description: '图片路径'})
  @prop()
  file: string  
}