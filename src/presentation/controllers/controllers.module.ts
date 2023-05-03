import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TodoController } from './todo.controller';

@Module({
  imports: [],
  controllers: [TodoController, AuthController],
})
export class ControllersModule {}