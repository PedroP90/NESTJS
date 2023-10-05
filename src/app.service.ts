import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola Mundo desde React!';
  }

  getAll(){
    return 'Listado de libros'
  }
}
