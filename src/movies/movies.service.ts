import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './movie.dto';
import { MovieEntity } from './movie.entity';
import { MovieInterface } from './movie.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private movierepository: Repository<MovieEntity>,
  ) {}
  async findAll(){
    return await this.movierepository.find();
  }

/* create(createMovieDto: CreateMovieDto): Movie {
    const newMovie: Movie = {
      //id: Date.now().toString(),
      ...createMovieDto,
    };
    this.movies.push(newMovie);
    return newMovie; */
}
