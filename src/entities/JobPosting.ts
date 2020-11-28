import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './Company';
import { Category } from './Category';
import { JobToCandidate } from './JobToCandidates';
import { Tag } from './Tag';
import { SubCategory } from './SubCategory';
import { Benefit } from './Benefit';
import { Country } from './Country';

export enum Modality {
  'FULL_TIME',
  'PART_TIME',
  'FREELANCE',
  'INTERNSHIP'
};

export enum Seniority {
  'NO_EXPERIENCE',
  'JUNIOR',
  'SEMI_SENIOR',
  'SENIOR',
  'EXPERT'
};

export enum Locality {
  'REMOTE',
  'ON_SITE',
  'PARTIALLY_REMOTE'
};

@Entity({ name: 'job' })
export class JobPosting {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Company, company => company.jobPostings)
  company: Company;

  @ManyToOne(() => SubCategory, subCategory => subCategory.jobPostings)
  subCategory: SubCategory;

  @Column()
  title: string;

  @Column({ nullable: true })
  salaryFrom: number;

  @Column({ nullable: true })
  salaryTo: number;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Modality
  })
  modality: Modality;

  @Column({
    type: 'enum',
    enum: Seniority
  })
  seniority: Seniority;

  @ManyToMany(() => Tag, tag => tag.jobs)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => JobToCandidate, jobToCandidate => jobToCandidate.job)
  candidates: JobToCandidate[];

  @CreateDateColumn()
  createdAt: Date;

  @Column({
    type: 'enum',
    enum: Locality
  })
  locality: Locality

  @ManyToMany(() => Country, country => country.jobPostings)
  @JoinTable()
  countries: Country[]

  @ManyToMany(() => Benefit, benefit => benefit.jobPostings)
  @JoinTable()
  benefits: Benefit[];

};