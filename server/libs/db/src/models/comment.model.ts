/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-27 09:45:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\libs\db\src\models\comment.model.ts
 */ 
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

  @prop({ ref: 'Blog' })
  blog: Ref<Blog>

  @prop({ ref: 'User' })
  author: Ref<User>
}