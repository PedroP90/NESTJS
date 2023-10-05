import { Module } from '@nestjs/common';
import { EditorialesController } from './editoriales.controller';
import { EditorialesService } from './editoriales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editorial } from './entities/editoriales.entity';

@Module({
  controllers: [EditorialesController],
  providers: [EditorialesService],
  imports: [
    TypeOrmModule.forFeature([Editorial])
  ]
})
export class EditorialesModule {}
