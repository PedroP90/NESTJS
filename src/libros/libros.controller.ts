import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

@Controller('libros')
export class LibrosController {

    //Inyectar en la propiedad librosService del objeto LibroController la clase LibrosService
    constructor(private readonly librosService:LibrosService){
        this.librosService
    }

    // @Get('/')
    // getHome(){
    //     return ('Seccion de Libros')
    // }

    // @Get('Listar')
    // getAll(){
    //     return this.librosService.findALL();
    // }

    @Get()									
    findAll( @Query() paginationDto: PaginationDTO) {
        console.log(paginationDto);
        return this.librosService.findAll(paginationDto);
    }


    @Get(':id')
    getISBN(@Param('id') isbn: string){
        console.log(isbn);
        //aquí el controlador llama al servicio
        return this.librosService.getISBN(isbn);
        
    }

    //Endpoint responsable de ejecutar la url
    //cuidado con el parámetro, el orden es importante, si lo pongo detrás de la raíz se traga todo
    @Get(':id/:nombre')
    getISBNusuario(@Param('id') isbn: string, @Param('nombre') usuario: string){
        console.log(isbn);
        return `El libro del usuario ${usuario} es el que tiene el isbn ${isbn}`;
    }

    @Post()
    create(@Body() createLibroDto: CreateLibroDto){
        //devuelve el return si el dto valida el objeto
        return this.librosService.create(createLibroDto)
        
    }

    @Delete(':id')
    remove(@Param('id') isbn: string) {
        return this.librosService.remove(isbn)
    }
}
