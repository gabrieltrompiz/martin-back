import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { JobPosting } from './JobPosting';

@Entity()
export class Tag {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => JobPosting, jobPosting => jobPosting.tags)
  jobs: JobPosting[];

};