import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

    async getISBN(isbn: string){
        //petición al ORM
        const libro = await this.libroRepository.findOneBy({isbn});
        //ORM --> SGBD
        if(!libro){
            throw new NotFoundException(`Libro con isbn ${isbn} no encontrado`);
        }else{
        return {
            data: libro,
            msg: `Detalle del libro ${isbn}`,
            status: 200
        };
    }
    }

    async findALL(){
        let libros = await this.libroRepository.find();
        return {
            data: libros,
            msg: 'Listado de libros',
            status: 200
        }
    }

    async create (createLibroDto: CreateLibroDto){

        //createLibroDto es ok
        //insertar en la BD
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
            console.log(error);
            throw new InternalServerErrorException("Pida ayuda a Fran o cuélguese de una farola")
        }
        
    }
}
