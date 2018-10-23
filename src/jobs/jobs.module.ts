import { Module } from "@nestjs/common";
import { MongooseModule, getModelToken } from "@nestjs/mongoose";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";
import { JobSchema } from "./schemas/job.schema";
import { DatabaseModule } from "../database/database.module";
import { jobsProviders } from "./jobs.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [JobsController],
  providers: [JobsService, ...jobsProviders]
})
export class JobsModule {}
