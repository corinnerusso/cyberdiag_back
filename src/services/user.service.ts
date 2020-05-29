import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/user.repository";
import { User } from "../entity/user.entity";

// Ici, on gère la logique avec typeorm notamment

export class UserService {
  private repository = getCustomRepository(UserRepository);
  relations = [
    "surveys"
  ]
  async getAll() {
    return await this.repository.find();
  }

  async getDashboard() {
    return await this.repository.find({ relations: this.relations });
  }

  async getById(id: number) {
    return await this.repository.findOne(id);
  }

  async post(user: User) {
    return await this.repository.save(user);
  }

  async update(user: User, userId: number) {
    return await this.repository.update(userId, user);
  }

  async deleteById(id: number) {
    return await this.repository.delete(id);
  }
}
