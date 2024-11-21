import { Review } from 'src/reviews/entities/review.entity';
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";



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

    @OneToMany(()=> Bootcamp, (bootcamp: Bootcamp)=> bootcamp.User)
    Bootcamp: Bootcamp 

    @OneToMany(()=> Review, (review: Review)=> review.User)
    Review: Review
}
