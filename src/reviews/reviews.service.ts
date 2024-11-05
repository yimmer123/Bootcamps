import { Review } from './entities/review.entity';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private bootcampRepository: Repository <Review>){}

  create(createReviewDto: CreateReviewDto) {
    //crear la instacia del objeto a guardar
    const nuevoReview = this.bootcampRepository.create(createReviewDto);
    return this.bootcampRepository.save(nuevoReview)
  } 
  

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id : id});
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    
  const UpdateReviews = await this.bootcampRepository.findOneBy({id})

    //fusionar los cambios con el objetpo hallado 
    await this.bootcampRepository.merge(UpdateReviews, updateReviewDto) 

    //grabar cambios en la base de datos 
    await this.bootcampRepository.save(UpdateReviews)

    return UpdateReviews 
  }

  async remove(id: number) {
    const delReview = await this.bootcampRepository.findOneBy({id});
    
    await this.bootcampRepository.delete(delReview);

    return delReview
  }
}
