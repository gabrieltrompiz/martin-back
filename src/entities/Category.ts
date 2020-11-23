import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';
import { Tag } from './Tag';

@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => JobPosting, jobPosting => jobPosting.category)
  jobPostings: JobPosting[];

  @OneToMany(() => Tag, tag => tag.category)
  tags: Tag[]

};