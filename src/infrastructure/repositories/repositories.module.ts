import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Todo } from '../entities/todo.entity';
import { User } from '../entities/user.entity';
import { TodoRepository } from './todo.repository';
import { DatabaseUserRepository } from './user.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Todo, User])],
  providers: [
    {
      provide: 'ITodoRepository',
      useClass: TodoRepository,
    },
  ],
  exports: ['ITodoRepository'],
})
export class RepositoriesModule {}