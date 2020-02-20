import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.model'
import { Blog } from './blog.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Comment {
  @ApiProperty()
  @prop()
  connect: string

  @prop({ ref: 'Cate' })
  blog: Ref<Blog>

  @prop({ ref: 'Cate' })
  author: Ref<User>
}