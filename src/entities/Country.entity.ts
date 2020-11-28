import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting.entity';

@Entity({ name: 'country' })
export class Country {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @ManyToMany(() => JobPosting, jobPosting => jobPosting.countries)
  jobPostings: JobPosting[]

};