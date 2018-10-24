import { Connection } from 'mongoose';
import { FactorySchema } from './schemas/factory.schema';

export const factoriesProviders = [
  {
    provide: 'FactoryModelToken',
    useFactory: (connection: Connection) => connection.model('Factory', FactorySchema),
    inject: ['DbConnectionToken'],
  },
];
