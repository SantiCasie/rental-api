import { Body, Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './movie.dto';
import { MovieInterface } from './movie.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(){
    return this.moviesService.findAll();
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    /* return this.moviesService.create(createMovieDto); */
  }
}
