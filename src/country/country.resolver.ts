import { Inject, Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/entities/Country';
import { CountryService } from './country.service';

@Injectable()
@Resolver(of => Country)
export class CountryResolver {
  constructor(@Inject(CountryService) private countryService: CountryService) {}

  @Query(returns => [Country])
  async countries() {
    return this.countryService.findAll();
  };
}