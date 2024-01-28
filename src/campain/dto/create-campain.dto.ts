import { IsNotEmpty } from 'class-validator';

export class CreateCampainDto {
  @IsNotEmpty()
  public name: string;
}
