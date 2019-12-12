import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class User{
  @ApiModelProperty({description: '用户名', example: 'user1'})
  @prop()
  username: string

  @ApiModelProperty({description: '真实姓名', example: 'user1'})
  @prop()
  ealname: string

  @ApiModelProperty({description: '密码', example: 'pass1'})
  @prop()
  passwd: string

  @ApiModelProperty({description: '生日', example: '2000年1月1日'})
  @prop()
  birthday: string

  @ApiModelProperty({description: '性别', example: '男'})
  @prop()
  sex: string

  @ApiModelProperty({description: '手机号', example: '15588886666'})
  @prop()
  phone: string

  @ApiModelProperty({description: '邮箱', example: '2111111112@qq.com'})
  @prop()
  email: string

  @ApiModelProperty({description: 'QQ', example: '2111111112'})
  @prop()
  qq: string
}