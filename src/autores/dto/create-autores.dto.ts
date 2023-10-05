import { IsInt, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAutorDto{
   
  

    @IsString()
    @MinLength(5)
    @MaxLength(30)
    nombre: string;

}