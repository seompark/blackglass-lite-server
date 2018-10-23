import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IJob } from "./interfaces/job.interface";
import { CreateJobDto } from "./dto/create-job.dto";

@Injectable()
export class JobsService {
  constructor(@InjectModel("Job") private readonly jobModel: Model<IJob>) {}

  public create(createJobDto: CreateJobDto): Promise<IJob> {
    const job = new this.jobModel(createJobDto);
    return job.save();
  }

  public findAll(): Promise<IJob[]> {
    return this.jobModel.find().exec();
  }
}
