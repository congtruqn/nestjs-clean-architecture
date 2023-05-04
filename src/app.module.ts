import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { ControllersModule } from './presentation/controllers/controllers.module';

@Module({
  imports: [EnvironmentConfigModule, LoggerModule, ExceptionsModule, RepositoriesModule, ControllersModule],
  providers: [],
})
export class AppModule {}
