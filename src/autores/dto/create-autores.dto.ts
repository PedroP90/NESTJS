import { IsInt, IsString, MaxLength, MinLength, isString } from "class-validator";

export class CreateAutorDto{
   
    @IsString()
    dni: string

    @IsString()
    @MinLength(5)
    @MaxLength(30)
    nombre: string;

}