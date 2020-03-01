import { prop, modelOptions, DocumentType } from '@typegoose/typegoose'
import { hashSync } from 'bcryptjs'

export type UserDocument = DocumentType<User>

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class User {
  @prop()
  username: string

  @prop({
    select: false,
    get(val) {
      return val
    },
    set(val) {
      return val && hashSync(val)
    }
  })
  password: string
}