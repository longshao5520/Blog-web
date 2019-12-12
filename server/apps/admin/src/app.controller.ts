import { Controller, Get, Post, UseInterceptors, UploadedFile, Body, HttpStatus, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { AdminModel } from 'libs/db/src/models/admin.model'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file){
    return {
      url: `http://localhost:3000/uploads/${file.filename}`
    }
  }

  @Post('login')
  async login(@Body() use){
    const { username, password } = use
    const admin = AdminModel
    // console.log(admin.findOne({username}))
    const user = admin.findOne({username: username})
    // console.log(2)
    // console.log(user)
    if(username){
      new HttpException({
        error: '用户不存在！',
        status: HttpStatus.FORBIDDEN
      }, 422)
    }else{
      return {
        message: 'ok'
      }
    }
    
    
  }

}
