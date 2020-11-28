import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@Entity({ name: 'tag' })
export class Tag {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => JobPosting, jobPosting => jobPosting.tags)
  jobs: JobPosting[];

};