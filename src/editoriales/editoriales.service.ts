import { Injectable } from '@nestjs/common';

@Injectable()
export class EditorialesService {

    getAll(){
        return ('Listado de todas las editoriales desde el servicio')
    }

}
