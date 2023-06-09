import { UserM, UserWithoutPassword } from '../../domain/model/user';
import { IUserRepository } from '../../domain/repositories/userRepository.interface';

export class IsAuthenticatedUseCases {
  constructor(private readonly adminUserRepo: IUserRepository) {}

  async execute(username: string): Promise<UserWithoutPassword> {
    const user: UserM = await this.adminUserRepo.getUserByUsername(username);
    const { password, ...info } = user;
    return info;
  }
}