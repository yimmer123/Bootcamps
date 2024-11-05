import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

    
}

enum minimumSkill{
    "Beginner",
    "Intermediate",
    "Advanced"
}
