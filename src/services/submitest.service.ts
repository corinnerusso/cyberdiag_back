import { getCustomRepository } from "typeorm";
import { SubmitestRepository } from "../repository/submitest.repository";
import { Submitest } from "../entity/submitest.entity";

// Ici, on gère la logique avec typeorm notamment

export class SubmitestService {
    private repository = getCustomRepository(SubmitestRepository);

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        return await this.repository.findOne(id);
    }


}
