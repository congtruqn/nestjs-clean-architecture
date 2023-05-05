import { Controller, Get } from '@nestjs/common';
import { todoUsecases } from '../../../usecases/todo/todo.usecases';

@Controller('todo')
export class TodoController {
  constructor(private readonly _todoUsecases: todoUsecases) {}
  @Get()
  async getHello(): Promise<string> {
    return await this._todoUsecases.create('a');
  }
}
