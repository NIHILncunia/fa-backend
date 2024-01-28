import { IsNotEmpty } from 'class-validator';

export class CreateSessionDto {
  @IsNotEmpty()
  public campain_id: string;

  @IsNotEmpty()
  public number: number;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public gm: string;

  @IsNotEmpty()
  public bonus_pc: string;
}
