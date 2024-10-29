import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';


@Injectable()
export class BootcampsService {
  create(createBootcampDto: CreateBootcampDto) {
    return 'This action adds a new bootcamp';
  }

  findAll() {
    return `This action returns all bootcamps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bootcamp`;
  }

  update(id: number, updateBootcampDto: any) {
    return `This action updates a #${id} bootcamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} bootcamp`;
  }
}
