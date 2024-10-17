import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
    //EndPoints GET
    @Get()
    getAllBootcamps():string{
        return"aqui se van a mostrar todo los bootcamps"
    }

    @Get(":id")
    getBootcampById(@Param("id") id: number ):string{
        return `aqui se va mostrar el bootcamp cuyo id : ${id}`
    }

    @Post()
    createBootcamp():string{
        return "aqui se va a guardar un nuevo bootcamp"
    }



}
