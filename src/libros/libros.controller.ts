import { Body, Controller, Get, Post } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';

@Controller('libros')
export class LibrosController {

    //Inyectar en la propiedad librosService del objeto LibroController la clase LibrosService
    constructor(private readonly librosService:LibrosService){
        this.librosService
    }

    @Get('/')
    getHome(){
        return ('Seccion de Libros')
    }

    // @Get('Listar')
    // getAll(){
    //     return this.librosService.getAll();
    // }

    @Post()
    create(@Body() createLibroDto: CreateLibroDto){
        
        return this.librosService.create(createLibroDto)
        
    }
}
