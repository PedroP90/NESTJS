import { Body, Controller, Get, Post } from '@nestjs/common';
import { EditorialesService } from './editoriales.service';
import { CreateEditorialDto } from './dto/create-editorial.dto';

@Controller('editoriales')
export class EditorialesController {

    constructor(private editorialesService:EditorialesService){

    }

    @Get('/')
    getHome(){
        return ('Seccion de Editoriales')
    }

    @Get('Listar')
    getAll(){
        return this.editorialesService.getAll();
    }

    @Post()
    create(@Body() createEditorialDto: CreateEditorialDto){
        return {
            data: createEditorialDto,
            msg: 'Editorial creada correctamente',
            status: 200
        }
    }


}
