/*
    DTO (Data Transfer Object)
    => 코드를 간결하게 만들 수 있도록 도와준다.
    => NestJS가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 한다.
*/

import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {

    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsString({ each: true })
    readonly genres: string[];
}