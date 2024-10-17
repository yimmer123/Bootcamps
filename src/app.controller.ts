import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //EndPoint : metoo que se ejecuta cuando se invoca determinadamente url desde el cliente 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //EndPoint:
  //-Metodo(Verbo) HTTP a utlizar(junto con la ruta)
  //-Firma del metodo a invocar
  //-Instrucciones a ejecutar
  @Get("/prueba1")
  mensaje(): string {
    return "Mensaje de prueba1"
  }

  @Get("/bootcamps/:id/curso/:cursoId")
  mensajeBootcampPorId(@Param("id") id:string, @Param("cursoId") cursoId:string ): string{
    return `mostrando bootcamp con id: ${id} y el curso: ${cursoId}`

    


  }
  @Get("identificacion/:id")
    getIdentificacion(@Query("nombre") nombre:string, @Query("edad") edad:number, @Param("id") id:number, @Query("ciudad") ciudad:string): Student{
      return new Student(id, nombre, edad, ciudad)
    }

}
