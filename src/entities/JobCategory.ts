import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@Entity()
export class JobCategory {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => JobPosting, jobPosting => jobPosting.category)
  jobPostings: JobPosting[];

};