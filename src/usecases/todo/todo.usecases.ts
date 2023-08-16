import { Inject, Injectable } from '@nestjs/common';
//import { ILogger } from '../../domain/logger/logger.interface';
import { TodoM } from '../../domain/model/todo';
import { ITodoRepository } from '../../domain/repositories/todoRepository.interface';

@Injectable()
export class todoUsecases {
  constructor(
    @Inject('ITodoRepository')
    private readonly todoRepository: ITodoRepository,
  ) {}

  async create(content: string): Promise<string> {
    return 'await todoRepository.';
  }
}
