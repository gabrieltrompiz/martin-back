import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';

@Entity({ name: 'company' })
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  linkedInUrl: string;

  @Column({ nullable: true })
  websiteUrl: string;

  @Column({ nullable: true })
  facebookUrl: string;

  @Column()
  logoUrl: string;

  @Column()
  slogan: string;

  @Column({ nullable: true })
  visionStatement: string;

  @Column({ nullable: true })
  missionStatement: string;

  @OneToMany(() => JobPosting, jobPosting => jobPosting.company)
  jobPostings: JobPosting[];

};