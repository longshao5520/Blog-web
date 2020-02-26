import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Friend {
  @prop()
  title: string

  @prop()
  subtitle: string

  @prop()
  img: string

  @prop()
  link: string
}