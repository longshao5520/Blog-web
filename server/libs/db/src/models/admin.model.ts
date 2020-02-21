import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Admin {
  @ApiProperty()
  @prop()
  username: string

  @ApiProperty()
  @prop()
  password: string
}