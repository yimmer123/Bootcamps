import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { updateBootcampDto } from './dto/update-bootcamp.dto';

@Injectable()
export class BootcampsService {

  constructor(@InjectRepository(Bootcamp) private bootcampRepository: Repository <Bootcamp>){}


  create(createBootcampDto: CreateBootcampDto) {
    //crear la instacia del objeto a guardar
    const nuevoBootcamp = this.bootcampRepository.create(createBootcampDto);
    return this.bootcampRepository.save(nuevoBootcamp)
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id : id});
  }

  async update(id: number, updateBootcampDto: updateBootcampDto) {

    const updateBootcamp = await this.bootcampRepository.findOneBy({id})

    //fusionar los cambios con el objetpo hallado 
    await this.bootcampRepository.merge(updateBootcamp, updateBootcampDto) 

    //grabar cambios en la base de datos 
    this.bootcampRepository.save(updateBootcamp)

    return updateBootcamp 
  }

  async remove(id: number) {
    const delBootcamp = await this.bootcampRepository.findOneBy({id});
    
    await this.bootcampRepository.delete(delBootcamp);

    return delBootcamp
  }
}
