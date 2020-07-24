/*
 * @Author: your name
 * @Date: 2020-07-24 19:44:55
 * @LastEditTime: 2020-07-24 19:45:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\local.strategy.ts
 */ 
import { Strategy, IStrategyOptions } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { BadRequestException } from '@nestjs/common'
import { compareSync } from 'bcryptjs'
import { Admin } from '@libs/db/models/admin.model'

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    @InjectModel(Admin) private adminModel: ReturnModelType<typeof Admin>
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password'
    } as IStrategyOptions)
  }

  async validate(username: string, password: string) {
    const user = await this.adminModel.findOne({ username }).select('+password')
    if (!user) {
      throw new BadRequestException('用户名或密码错误')
    }
    if (!compareSync(password, user.password)) {
      throw new BadRequestException('用户名或密码错误')
    }
    return user
  }
}