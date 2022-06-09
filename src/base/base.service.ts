import { Injectable} from '@nestjs/common';
import { Document, FilterQuery, Model } from 'mongoose';
import { IBaseService } from './interfaces/base.interface';

@Injectable()
export abstract class BaseService<T extends Document> implements IBaseService<T> {
	private readonly modelName: string;

	constructor(private readonly model: Model<T>) {
		for (const modelName of Object.keys(model.collection.conn.models)) {
			if (model.collection.conn.models[modelName] === this.model) {
				this.modelName = modelName;
				break;
			}
		}
	}

	async create(dto: Partial<Record<keyof T, unknown>>): Promise<T | null> {
		const newObj = await this.model.create({ ...dto });

		if (!newObj) {
			throw Error(`Cannot create new ${this.modelName}`);
		}
		return newObj;
	}

	// async getByPagination(paginationQuery: PaginationQueryDto): Promise<T[] | null> {
	// 	const { pageSize, pageIndex } = paginationQuery;

	// 	return this.model
	// 		.find()
	// 		.skip(pageSize * (pageIndex - 1))
	// 		.limit(pageSize)
	// 		.sort({ firstName: 'asc' })
	// 		.exec();
	// }

	async findAll(): Promise<T[] | null> {
		const objects = await this.model.find().exec();
		return objects;
	}

	async find(conditions: Partial<Record<keyof T, unknown>>): Promise<T[]> {
		return this.model.find(conditions as FilterQuery<T>).exec();
	}

	async findOne(conditions: Partial<Record<keyof T, unknown>>): Promise<T | null> {
		const object = await this.model.findOne(conditions as FilterQuery<T>);

		return object;
	}

	async findById(id: string): Promise<T | null> {
		return await this.model.findOne({ _id: id }).exec();
	}

	async findByIds(ids: string[]): Promise<T[] | null> {
		return await this.model.find({ _id: { $in: ids } }).exec();
	}

	async update(id: string, updateDto: Partial<Record<keyof T, unknown>>): Promise<boolean> {
		const updateObject = await this.model.updateOne({ _id: id }, { $set: updateDto });
		return updateObject.acknowledged;
	}

	async remove(id: string): Promise<boolean> {
		//const object = await this.model.findOne({ _id: id }).exec();
		const deletedObject = await this.model.deleteOne({ _id: id });
		return deletedObject.deletedCount > 0;
	}
}
