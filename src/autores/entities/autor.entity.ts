import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Autor')
export class Autor {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text',{
        unique: true,
        default: 'autor',
        nullable: false
    })
    nombre: string;
}