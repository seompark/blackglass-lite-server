import { Controller, Get, Post, Body } from "@nestjs/common";
import { FactoriesService } from "./factories.service";
import { CreateFactoryDto } from "./dto/create-factory.dto";

@Controller("factories")
export class FactoriesController {
  constructor(private readonly factoriesService: FactoriesService) {}

  @Post()
  public create(@Body() createFactoryDto: CreateFactoryDto) {
    return this.factoriesService.create(createFactoryDto);
  }

  @Get()
  public findAll() {
    return this.factoriesService.findAll();
  }
}
