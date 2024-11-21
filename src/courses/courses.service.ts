import { Course } from 'src/courses/entities/course.entity';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course) private CourseRepository: Repository <Course>){}


  create(createCourseDto: CreateCourseDto) {
    const nuevoCourses = this.CourseRepository.create(createCourseDto);
    return this.CourseRepository.save(nuevoCourses);
  }

  findAll() {
    return this.CourseRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
