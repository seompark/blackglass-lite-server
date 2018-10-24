import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateJobDto {
  @ApiModelProperty()
  @IsString()
  public readonly position: string;

  @ApiModelProperty()
  @IsString()
  public readonly size: string;

  @ApiModelProperty()
  @IsString()
  public readonly factory: string;

  @ApiModelProperty()
  @IsString()
  public readonly description: string;
}
