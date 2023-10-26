import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Autor } from './entities/autor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autores.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

@Injectable()
export class AutoresService {

    constructor(
        @InjectRepository(Autor) 
        private readonly autorRepository: Repository<Autor>
    ){
        
    }

    getAll(){
        //se comunicada con el SGBD a través de TypeORM
        //pasa los datos a TypeORM que se comunica con el SGBD
        //recibe la DATA de TypeORM 
        //devuelve la DATA al cliente
        return ('Listado de todos los autores desde el servicio')
    }

    getAutorById(id: string){
        return (`Detalle del autor ${id}`)
        
    }

    findAll( paginationDto: PaginationDTO ) {			
        const { limit , offset } = paginationDto;
        //busca desde el ‘offset’ y extrae ‘limit’ objetos
        return this.autorRepository.find({
            take: limit,
            skip: offset
          });
        }

    async create (createAutorDto: CreateAutorDto){

        //createLibroDto es ok
        //insertar en la BD
        try{
            // el objeto json que nos llega se transforma en un objeto javascript
            const autor = this.autorRepository.create(createAutorDto);
            //.save se encarga de transformar el objeto javascript en un registro en la base de datos
            // y realiza un insert into
            await this.autorRepository.save(autor);
 
            // Insertar en la BD 
            return {
             data: createAutorDto,
             msg: 'Autor creado correctamente',
             status: 200
            }
        }catch(error){
            console.log(error);
            throw new InternalServerErrorException("Pida ayuda a Fran o cuélguese de una farola")
        }
        
    }
}
