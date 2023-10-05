import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

//Para la creación de la tabla y sus columnas

@Entity('Libros')
export class Libro {
    @PrimaryGeneratedColumn('increment')
    id: number;

    
    @PrimaryColumn()
    isbn: string

    @Column({
        type: 'text',
        unique: true,
        nullable: false
    })
    nombre: string;

    @Column({
        type: 'numeric',
        nullable: false,
        default: 0
    })
    precio: number
}