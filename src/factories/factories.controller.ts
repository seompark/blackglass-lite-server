import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FactoriesService } from './factories.service';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('factories')
@Controller('factories')
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

  @Get(':id')
  public findById(@Param('id') id: string) {
    return this.factoriesService.findById(id);
  }
}
