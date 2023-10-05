import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Editorial')
export class Editorial {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text',{
        unique: true,
        default: 'editorial',
        nullable: false
    })
    nombre: string;
}