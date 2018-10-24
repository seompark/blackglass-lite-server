import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Job } from './interfaces/job.interface';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@Inject('JobModelToken') private readonly jobModel: Model<Job>) {}

  public create(createJobDto: CreateJobDto): Promise<Job> {
    return this.jobModel.create(createJobDto);
  }

  public findAll(): Promise<Job[]> {
    return this.jobModel.find().exec();
  }
}
