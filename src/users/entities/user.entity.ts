import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";



@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column ({type: "varchar", nullable: false})
    name: string

    @Column ({type: "varchar", nullable: false})
    email: string

    @Column ({type: "varchar", nullable: false})
    rol: string

    @Column ({type: "varchar", nullable: false})
    password: string
}
