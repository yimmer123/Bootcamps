import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column ({type: "varchar", nullable: false})
    title: string

    @Column ({ type: "text", nullable: false})
    description : string

    @Column ({ type: "tinyint", nullable: false, default: 4})
    weeks : number

    @Column ({ type: "double", nullable: false})
    tuition : number

    @Column ({ name: "minimum_skill", type : "enum", enum : ["Beginner","Intermediate","Advanced"],})
    minimumSkill : minimumSkill

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', name: "created_at" })
    createsAt: Date

    //El Bootcamp al que pertence el course
    //El inverso de la relacion 
    @ManyToOne(()=> Bootcamp, (bootcamp: Bootcamp)=> bootcamp.Cursos ) 
    bootcamp: Bootcamp

    
}

enum minimumSkill{
    "Beginner",
    "Intermediate",
    "Advanced"
}
