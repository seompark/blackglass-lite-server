import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FactoriesController } from './factories.controller';
import { FactoriesService } from './factories.service';
import { factoriesProviders } from './factories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FactoriesController],
  providers: [FactoriesService, ...factoriesProviders],
})
export class FactoriesModule {}
