import { Controller, Get } from '@nestjs/common';
import { todoUsecases } from '../../usecases/todo/todo.usecases';

@Controller('todo')
export class TodoController {
  constructor(private readonly userService: todoUsecases) {}
  @Get()
  getHello(): string {
    return 'hello';
  }
}
