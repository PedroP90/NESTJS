import { IsIn, IsInt, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEditorialDto{
   

    @IsIn(['Anaya','Santillana','Paraninfo'])
    nombre: string;

}