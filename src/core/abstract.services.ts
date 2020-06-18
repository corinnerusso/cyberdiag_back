import { ObjectLiteral, Repository } from 'typeorm';
import { User } from '../entity/user.entity'

import { hash } from 'argon2';

export abstract class AbstractService {

    protected abstract repository: Repository<ObjectLiteral>;
    // Business logic

    async getAll() {
        return await this.repository.find();
    }

    async getById(id: number) {
        const element = await this.repository.findOne(id);
        if (!element) {
            throw new Error('REQUEST NOT FOUND');
        }
        return element;
    }

    async create(element: any) {
        element = this.repository.create(element);
        return await this.repository.save(element);
    }

    async update(idElement: any, element: ObjectLiteral) {
        if (element === User) {
            element.password = hash(element.password)
        }
        return await this.repository.update(idElement, element);
    }

    async delete(id: any) {
        return await this.repository.delete(id);
    }

}
