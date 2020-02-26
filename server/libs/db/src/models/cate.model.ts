import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Cate {
  @prop()
  title: string

  @prop()
  cover: string
}