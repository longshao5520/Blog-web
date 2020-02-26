import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { Cate } from './cate.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Blog {
  @prop()
  title: string

  @prop()
  label: string

  @prop()
  connect: string

  @prop()
  cover: string

  @prop()
  author: string

  @prop({ ref: 'Cate' })
  cate: Ref<Cate>
}