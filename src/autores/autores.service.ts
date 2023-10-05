import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoresService {

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
}
