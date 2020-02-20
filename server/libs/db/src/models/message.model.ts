import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Message {
  @ApiProperty()
  @prop()
  connect: string

  @prop({ ref: 'User' })
  author: Ref<User>
}