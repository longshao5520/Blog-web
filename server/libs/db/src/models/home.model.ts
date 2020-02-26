import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Home {
  @prop()
  title: string

  @prop()
  subtitle: string

  @prop()
  img: string

  @prop()
  cover: string
}