import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";      
export class PaginationDTO {


   @IsOptional()
   @IsPositive()
   //Transformar:
   @Type(() => Number) //enableImplicitConversion:true
   limit?:number;


   @IsOptional()
   @Min(0)
   @Type(() => Number) //enableImplicitConversion:true
   offset?:number;
}
