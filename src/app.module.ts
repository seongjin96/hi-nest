import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @ -> 데코레이터: 클래스에 함수 기능 추가
@Module({
  imports: [],
  controllers: [AppController], // url을 가져오고 함수를 실행, express의 라우터 기능
  providers: [AppService],
})
export class AppModule {}
