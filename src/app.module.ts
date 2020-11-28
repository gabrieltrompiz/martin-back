import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    GraphQLModule.forRoot({ 
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    CountryModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor() {}
}
