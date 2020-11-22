import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true })
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor() {}
}
