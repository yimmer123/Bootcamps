import { IsDate, IsDateString, IsEnum, Matches } from "class-validator"
import { Column } from "typeorm"


export enum SkillLevel {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
}

export class CreateCourseDto {
    readonly title: string
    readonly description: string
    readonly weeks: number
    readonly tuition: number
    
    
    @Column({
        name: "minimum_skill",
        type: "enum",
        enum: SkillLevel, // Referencia al enum
    }) 
    @IsEnum(SkillLevel)
    readonly minimum_skill: SkillLevel;
    
    @IsDateString({}, {message: "NO esta bien "})
    readonly created: Date 
}
