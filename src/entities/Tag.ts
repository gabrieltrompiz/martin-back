import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@ObjectType()
@Entity({ name: 'tag' })
export class Tag {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => [JobPosting])
  @ManyToMany(() => JobPosting, jobPosting => jobPosting.tags)
  jobs: JobPosting[];

};