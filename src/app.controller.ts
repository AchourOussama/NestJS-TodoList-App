import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/get")
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  getTodo(){
    return "list of Todos"
  }
  @Post("/post")
  addTodo(){
    return "new task added ! "
  }
}
