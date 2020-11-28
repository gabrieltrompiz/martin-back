import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@ObjectType()
@Entity({ name: 'country' })
export class Country {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(type => String)
  @Column({ unique: true })
  name: string

  @Field(type => [JobPosting])
  @ManyToMany(() => JobPosting, jobPosting => jobPosting.countries)
  jobPostings: JobPosting[]

};