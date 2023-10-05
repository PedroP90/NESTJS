import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//ese arroba es un decorador que indica que se puede exportar la clase
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    //inyección de dependencia
    //inyectando la clase AppService en la propiedad appService de la clase AppController
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('listado') //--> el endpoint /listado
  getAll(){
    return this.appService.getAll();
  }

}
