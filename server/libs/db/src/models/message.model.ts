import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { User } from './user.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Message {
  @prop()
  connect: string

  @prop({ ref: 'User' })
  author: Ref<User>
}