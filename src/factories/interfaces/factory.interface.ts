import { Document } from 'mongoose';

export interface Factory extends Document {
  readonly name: string;
  readonly description: string;
  readonly logoPath: string;
  readonly likeCount: Number;
  readonly readCount: Number;
}
