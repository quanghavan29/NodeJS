import { Repository, DeepPartial, ObjectID } from 'typeorm';

export class BaseService<T> {
    readonly repo: Repository<T>

    constructor(repo: Repository<T>) {
        this.repo = repo;
    }

    async findAll(): Promise<Array<Partial<T>>> {
        return this.repo.find();
    }

    async findById(id: number): Promise<T | undefined> {
        return this.repo.findOne(id);
    }

    async update(id: number, body: DeepPartial<T>): Promise<T | undefined> {
        await this.repo.update(id, body);
        return this.findById(id);
    }

    async delete(id: number): Promise<T | undefined> {
        await this.repo.delete(id);
        return await this.findById(id);
    }
}