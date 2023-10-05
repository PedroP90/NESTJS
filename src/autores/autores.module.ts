import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  imports: [
    TypeOrmModule.forFeature([Autor])
  ]
})
export class AutoresModule {}
