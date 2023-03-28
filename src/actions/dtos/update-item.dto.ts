import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { IsNotEmpty } from "class-validator";

export class UpdateItemDto extends PartialType(CreateItemDto) {
  @IsNotEmpty()
  json: string;
}
