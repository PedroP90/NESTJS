// se encargar de validar los nuevos registros

import { IsInt, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateLibroDto{
    @IsString()
    @MinLength(5)
    @MaxLength(10)
    isbn: string;

    @IsString()
    @MinLength(5)
    nombre: string;

    @IsInt()
    @IsPositive()
    precio: number;

    

}