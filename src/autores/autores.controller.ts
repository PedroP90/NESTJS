import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autores.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

@Controller('autores')
export class AutoresController {

    constructor(private autoresService:AutoresService){

    }

    //.../autores  es la home de autores
    // Si no comento esta parte luego no puedo paginar con offset y limit
    // @Get('/')
    // getHome(){
    //     return ('Seccion de Autores')
    // }

    @Get()									
    findAll( @Query() paginationDto: PaginationDTO) {
        console.log(paginationDto);
        return this.autoresService.findAll(paginationDto);
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
    create(@Body() CreateAutorDto: CreateAutorDto){
        console.log(CreateAutorDto)
        return this.autoresService.create(CreateAutorDto)
    }

}
