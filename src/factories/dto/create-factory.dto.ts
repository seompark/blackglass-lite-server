import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFactoryDto {
  @ApiModelProperty()
  @IsString()
  public readonly id: string;

  @ApiModelProperty()
  @IsString()
  public readonly name: string;

  @ApiModelProperty()
  @IsString()
  public readonly description: string;

  @ApiModelPropertyOptional()
  @IsString()
  public readonly logoPath: string;
}
