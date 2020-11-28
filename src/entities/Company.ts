import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@ObjectType()
@Entity({ name: 'company' })
export class Company {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => String)
  @Column({ nullable: true })
  linkedInUrl: string;

  @Field(type => String)
  @Column({ nullable: true })
  websiteUrl: string;

  @Field(type => String)
  @Column({ nullable: true })
  facebookUrl: string;

  @Field(type => String)
  @Column()
  logoUrl: string;

  @Field(type => String)
  @Column()
  slogan: string;

  @Field(type => String)
  @Column({ nullable: true })
  visionStatement: string;

  @Field(type => String)
  @Column({ nullable: true })
  missionStatement: string;

  @Field(type => [JobPosting])
  @OneToMany(() => JobPosting, jobPosting => jobPosting.company)
  jobPostings: JobPosting[];

};