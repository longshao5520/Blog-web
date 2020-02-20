import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Photo {
  @ApiProperty()
  @prop()
  tpmc: string

  @ApiProperty()
  @prop()
  file: string
}