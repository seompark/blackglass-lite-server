import { Document, Schema } from "mongoose";
import { IFactory } from "factories/interfaces/factories.interface";

export interface IJob extends Document {
  readonly position: string;
  readonly size: string;
  readonly factory: Schema.Types.ObjectId | IFactory;
  readonly description: string;
}
