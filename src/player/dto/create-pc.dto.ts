import { IsNotEmpty } from 'class-validator';

export class CreatePcDto {
  @IsNotEmpty()
  public campain_id: string;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public level: number;

  @IsNotEmpty()
  public class: string;
}
