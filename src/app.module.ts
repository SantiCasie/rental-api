import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [
    MoviesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'peliculasapi',
      entities: ['*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, MoviesController],
  providers: [AppService],
})
export class AppModule {}
