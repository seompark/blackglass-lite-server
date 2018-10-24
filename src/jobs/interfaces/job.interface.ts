import { Document, Schema } from 'mongoose';
import { Factory } from 'factories/interfaces/factory.interface';

export interface Job extends Document {
  readonly position: string;
  readonly size: string;
  readonly factory: Schema.Types.ObjectId | Factory;
  readonly description: string;
}
