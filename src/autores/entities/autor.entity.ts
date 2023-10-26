import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Autor')
export class Autor {
    // @PrimaryGeneratedColumn('increment')
    // id: number;

    @PrimaryColumn()
    dni: string

    @Column('text',{
        unique: true,
        default: 'autor',
        nullable: false
    })
    nombre: string;
}