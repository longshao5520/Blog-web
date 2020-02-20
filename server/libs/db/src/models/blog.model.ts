import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Cate } from './cate.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Blog {
  @ApiProperty()
  @prop()
  title: string

  @ApiProperty()
  @prop()
  label: string

  @ApiProperty()
  @prop()
  connect: string

  @ApiProperty()
  @prop()
  cover: string

  @ApiProperty()
  @prop()
  author: string

  @prop({ ref: 'Cate' })
  cate: Ref<Cate>
}