import { prop, modelOptions } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Photo {
  @prop()
  tpmc: string

  @prop()
  file: string
}