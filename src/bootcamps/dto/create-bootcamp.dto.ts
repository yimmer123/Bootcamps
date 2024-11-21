import { IsDate, IsNotEmpty, IsNumber, IsPositive, Matches, Max, Min } from "class-validator"



export class CreateBootcampDto {
    @IsNumber()
    @IsNotEmpty({message:" Olaaa!!! Pongale el NUMERO"})
    @IsPositive({message: " Debe ser positivo rey, que pasa"})
    readonly phone: number

    @IsNotEmpty({message:" Olaaa!!! Ponga el NOMBRE"})
    readonly name: string

    @Min(1)
    @Max(5)
    @IsNotEmpty({message: "noo debe ser mayor de 10 que pasa"})
    readonly average_rating: number

    @IsNotEmpty()
    readonly address: string
    readonly topics: string

    @Matches(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Fecha debe ser en formato DD/MM/YYYY' })
    readonly createsAt: Date

    
}
