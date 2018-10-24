import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Factory } from './interfaces/factory.interface';
import { CreateFactoryDto } from './dto/create-factory.dto';

@Injectable()
export class FactoriesService {
  constructor(
    @Inject('FactoryModelToken') private readonly factoryModel: Model<Factory>,
  ) {}

  public create(createFactoryDto: CreateFactoryDto): Promise<Factory> {
    return new this.factoryModel(createFactoryDto).save();
  }

  public findAll() {
    return this.factoryModel.find().exec();
  }

  public findOne() {
    return this.factoryModel.findOne({});
  }

  public findById(id: string) {
    return this.factoryModel.findOne({ id });
  }
}
