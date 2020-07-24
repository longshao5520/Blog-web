/*
 * @Author: your name
 * @Date: 2020-06-12 09:23:10
 * @LastEditTime: 2020-07-24 19:40:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\libs\db\src\models\admin.model.ts
 */ 
import { prop, modelOptions, DocumentType } from '@typegoose/typegoose'
import { hashSync } from 'bcryptjs'

export type AdminDocument = DocumentType<Admin>

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Admin {
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