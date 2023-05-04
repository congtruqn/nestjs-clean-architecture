import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getHello(): string {
    return 'hello';
  }
}
