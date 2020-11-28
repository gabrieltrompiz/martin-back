import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({ playground: true }),
    TypeOrmModule.forRoot({ autoLoadEntities: true })
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor() {}
}
