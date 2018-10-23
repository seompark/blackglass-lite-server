import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IFactory } from "./interfaces/factories.interface";
import { CreateFactoryDto } from "./dto/create-factory.dto";

@Injectable()
export class FactoriesService {
  constructor(
    @InjectModel("Factories") private readonly factoryModel: Model<IFactory>
  ) {}

  public create(createFactoryDto: CreateFactoryDto): Promise<IFactory> {
    return new this.factoryModel(createFactoryDto).save();
  }

  public findAll() {
    return this.factoryModel.find().exec();
  }

  public findOne() {
    return this.factoryModel.findOne({});
  }
}
