import { Controller, Get, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Admin } from '@libs/db/models/admin.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel(Admin) private readonly model: ReturnModelType<typeof Admin>,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @ApiOperation({ summary: '上传' })
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file) {
    return file
  }

  @Post('login')
  async login(@Body() dto) {
    const { username, password } = dto
    const admin = await this.model.findOne({ username })
    console.log(admin)
    return dto
  }
}
