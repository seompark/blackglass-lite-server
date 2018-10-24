import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { FactoriesModule } from 'factories/factories.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [JobsModule, FactoriesModule, UsersModule],
})
export class AppModule {}
