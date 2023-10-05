import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autores.dto';

@Controller('autores')
export class AutoresController {

    constructor(private autoresService:AutoresService){

    }

    //.../autores  es la home de autores
    @Get('/')
    getHome(){
        return ('Seccion de Autores')
    }

    // listar todos o un subconjunto/filtro
    //.../autores/listar
    @Get('Listar')
    getAll(){
        return this.autoresService.getAll();
    }

    // listar un detalle, un objeto, un autor aquí
    //.../autores/variable
    @Get('id')
    getAutorById(@Param('id') id: string){
        return this.autoresService.getAutorById(id);
    }

    // @Post()
    // new(){
    //     return ('nuevo registro');
    // }
    
    @Put()
    update(){
        return ('actualizar registro');
    }

    @Delete()
    delete(){
        return ('borrar registro');
    }

    @Post()
    create(@Body() createLibroDto: CreateAutorDto){
        console.log(createLibroDto)
        
        return {
            data: createLibroDto,
            msg: 'Autor creado correctamente',
            status: 200
        }
    }

}
