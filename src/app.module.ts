import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// @ -> 데코레이터: 클래스에 함수 기능 추가
@Module({
  imports: [],
  controllers: [AppController, MoviesController], // url을 가져오고 함수를 실행, express의 라우터 기능
  providers: [AppService, MoviesService],
})
export class AppModule {}
