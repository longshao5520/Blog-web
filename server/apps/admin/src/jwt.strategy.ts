/*
 * @Author: your name
 * @Date: 2020-07-24 19:32:03
 * @LastEditTime: 2020-07-24 20:36:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nest-Vue-Blog\server\apps\admin\src\jwt.strategy.ts
 */ 
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { Admin } from '@libs/db/models/admin.model'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Admin) private adminModel: ReturnModelType<typeof Admin>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    } as StrategyOptions)
  }

  async validate(id) {
    return await this.adminModel.findById(id)
  }
}