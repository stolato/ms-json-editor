import { IsNotEmpty } from "class-validator";

export class CreateItemDto {
  @IsNotEmpty()
  json: string;

  @IsNotEmpty()
  ip: string;
}
