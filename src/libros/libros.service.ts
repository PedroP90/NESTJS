import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libro) 
        private readonly libroRepository: Repository<Libro>
    ){
        
    }
    
    // getAll(){
    //     return ('Listado de Libros desde el servicio')
    // }

    async create (createLibroDto: CreateLibroDto){

        try{
            // el objeto json que nos llega se transforma en un objeto javascript
            const libro = this.libroRepository.create(createLibroDto);
            //.save se encarga de transformar el objeto javascript en un registro en la base de datos
            // y realiza un insert into
            await this.libroRepository.save(libro);
 
            // Insertar en la BD 
            return {
             data: createLibroDto,
             msg: 'Libro creado correctamente',
             status: 200
            }
        }catch(error){
            throw new InternalServerErrorException("Pida ayuda a Fran o cuélguese de una farola")
        }
        
    }
}
