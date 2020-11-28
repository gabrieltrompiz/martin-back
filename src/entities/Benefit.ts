import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@Entity({ name: 'benefit' })
export class Benefit {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  icon: string;

  @ManyToMany(() => JobPosting, jobPostings => jobPostings.benefits)
  jobPostings: JobPosting[];

}