import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/entities/Country';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Country])
  ],
  controllers: [],
  providers: [CountryService, CountryResolver],
  exports: [CountryService]
})
export class CountryModule {}