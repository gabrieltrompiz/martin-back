import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@ObjectType()
@Entity({ name: 'benefit' })
export class Benefit {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(type => String)
  @Column()
  title: string;

  @Field(type => String)
  @Column()
  description: string;

  @Field(type => String)
  @Column()
  icon: string;

  @Field(type => JobPosting)
  @ManyToMany(() => JobPosting, jobPostings => jobPostings.benefits)
  jobPostings: JobPosting[];

}