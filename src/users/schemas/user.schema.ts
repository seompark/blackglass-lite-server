import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  passsword: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

UserSchema.statics = {
  hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  },
};

UserSchema.methods = {
  comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  },
};
