import { hash } from "argon2";
import { getCustomRepository } from "typeorm";
import { AbstractService } from '../core/abstract.services';
import { User, UserRole } from '../entity/user.entity';
import { UserRepository } from "../repository/user.repository";
import { TokenRepository } from './../repository/token.repository';


// Ici, on gère la logique avec typeorm notamment

export class UserService extends AbstractService {

  protected repository = getCustomRepository(UserRepository);
  protected tokenRepository = getCustomRepository(TokenRepository);

  relationsEntities = [];

  async getAll() {
    return await this.repository.find({ relations: this.relationsEntities });
  }

  async getByUserInfo(id: number) {
    return await this.repository.findOne(id, { relations: this.relationsEntities });
  }

  async userPage(id: number) {
    return await this.repository.findOne(id, { relations: this.relationsEntities });
  }

  async activUserAccount(user: User) {
    const is_admin = user.is_admin;
    user.activated = true;

    if (is_admin === 1) {
      user.role = UserRole.ADMIN;
    } else {
      user.role = UserRole.USER;
    }

    const id = user.id;
    const idToken = await this.tokenRepository.findOne({ where: { user: { id } } });

    if (idToken !== undefined) {
      this.tokenRepository.delete(idToken.id);
    }

    return await this.repository.save(user);

  }

  async modifyAUser(id: number, user: any) {
    if (user.password) {
      user.password = await hash(user.password); // from argon2
    }
    const userUpdated = await this.repository.update(id, user);
    // tslint:disable-next-line: max-line-length
    return this.repository.findOne(id, {
      select: ['email', 'lastname', 'role', 'activated', 'id'],
      relations: this.relationsEntities,
    },
    );
  }

  async getMe(id: number) {
    return await this.repository.findOne(id, {
      select: ['email', 'lastname', 'role', 'activated', 'id'],
      relations: this.relationsEntities,
    });
  }


  // export class UserService {
  //   private repository = getCustomRepository(UserRepository);
  relations = [
    "surveys"
  ]


  async getDashboard() {
    return await this.repository.find({ relations: this.relations });
  }

  // async getById(id: number) {
  //   return await this.repository.findOne(id);
  // }

  async post(user: User) {
    return await this.repository.save(user);
  }

  // async update(user: User, userId: number) {
  //   return await this.repository.update(userId, user);
  // }

  async deleteById(id: number) {
    return await this.repository.delete(id);
  }
}
