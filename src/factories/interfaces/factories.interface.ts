import { Document } from "mongoose";
import { IJob } from "jobs/interfaces/jobs.interface";

export interface IFactory extends Document {
  readonly name: string;
  readonly bio: string;
  readonly description: string;
  readonly logoPath: string;
  readonly likeCount: Number;
  readonly readCount: Number;
}
