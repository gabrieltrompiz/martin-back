import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './Company';
import { Category } from './Category';
import { JobToCandidate } from './JobToCandidates';
import { Tag } from './Tag';
import { SubCategory } from './SubCategory';
import { Benefit } from './Benefit';
import { Country } from './Country';
import { Field, Float, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum Modality {
  'FULL_TIME',
  'PART_TIME',
  'FREELANCE',
  'INTERNSHIP'
};
registerEnumType(Modality, { name: 'Modality' });

export enum Seniority {
  'NO_EXPERIENCE',
  'JUNIOR',
  'SEMI_SENIOR',
  'SENIOR',
  'EXPERT'
};
registerEnumType(Seniority, { name: 'Seniority' })

export enum Locality {
  'REMOTE',
  'ON_SITE',
  'PARTIALLY_REMOTE'
};
registerEnumType(Locality, { name: 'Locality' });

@ObjectType()
@Entity({ name: 'job' })
export class JobPosting {
  
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => Company)
  @ManyToOne(() => Company, company => company.jobPostings)
  company: Company;

  @Field(type => SubCategory)
  @ManyToOne(() => SubCategory, subCategory => subCategory.jobPostings)
  subCategory: SubCategory;

  @Field(type => String)
  @Column()
  title: string;

  @Field(type => Float, { nullable: true })
  @Column({ nullable: true })
  salaryFrom: number;

  @Field(type => Float, { nullable: true })
  @Column({ nullable: true })
  salaryTo: number;

  @Field(type => String)
  @Column()
  description: string;

  @Field(type => Modality)
  @Column({
    type: 'enum',
    enum: Modality
  })
  modality: Modality;

  @Field(type => Seniority)
  @Column({
    type: 'enum',
    enum: Seniority
  })
  seniority: Seniority;

  @Field(type => [Tag])
  @ManyToMany(() => Tag, tag => tag.jobs)
  @JoinTable()
  tags: Tag[];

  @Field(type => [JobToCandidate])
  @OneToMany(() => JobToCandidate, jobToCandidate => jobToCandidate.job)
  candidates: JobToCandidate[];

  @Field(type => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(type => Locality)
  @Column({
    type: 'enum',
    enum: Locality
  })
  locality: Locality

  @Field(type => [Country])
  @ManyToMany(() => Country, country => country.jobPostings)
  @JoinTable()
  countries: Country[]

  @Field(type => [Benefit])
  @ManyToMany(() => Benefit, benefit => benefit.jobPostings)
  @JoinTable()
  benefits: Benefit[];

};