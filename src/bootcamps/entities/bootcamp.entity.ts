import { User } from './../../users/entities/user.entity';

import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type : "integer", nullable: true})
    phone: number

    @Column({ type: "varchar",  nullable: false})
    name: string

    @Column({ name: 'average_rating'})
    average_rating: number

    @Column({ type : "varchar", nullable: false})
    address: string

    @Column({ type : "varchar"})
    topics: string

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', name: "created_at" })
    createsAt: Date

    //Los cursos de un Bootcamp 
    @OneToMany(()=> Course, (cursote: Course)=> cursote.bootcamp)
    Cursos: Course[]



    @OneToMany(()=> Review, (review: Review)=> review.Bootcamp)
    Review: Review



    @ManyToOne(()=> Bootcamp, (bootcamp: Bootcamp)=> bootcamp.User) 
    User: User 
}
