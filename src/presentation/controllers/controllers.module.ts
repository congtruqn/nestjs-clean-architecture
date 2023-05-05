import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';
import { todoUsecases } from '../../usecases/todo/todo.usecases';
import { RepositoriesModule } from '../../infrastructure/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [TodoController],
  providers:[todoUsecases]
})
export class ControllersModule {}