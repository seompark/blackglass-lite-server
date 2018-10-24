import * as mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);
mongoose.set('autoIndex', process.env.NODE_ENV !== 'production');

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
      }),
  },
];
