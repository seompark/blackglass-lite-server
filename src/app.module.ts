import { Module } from "@nestjs/common";
import { JobsModule } from "jobs/jobs.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(""),
    JobsModule
  ],
})
export class AppModule { }
