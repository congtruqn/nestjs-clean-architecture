import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { TodoController } from './presentation/controllers/todo.controller';
import { todoUsecases } from './usecases/todo/todo.usecases';

@Module({
  imports: [EnvironmentConfigModule, LoggerModule, ExceptionsModule, RepositoriesModule],
  controllers: [TodoController],
  providers: [todoUsecases],
})
export class AppModule {}
