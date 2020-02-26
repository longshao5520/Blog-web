import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { User } from './user.model'
import { Blog } from './blog.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Comment {
  @prop()
  connect: string

  @prop({ ref: 'Cate' })
  blog: Ref<Blog>

  @prop({ ref: 'Cate' })
  author: Ref<User>
}