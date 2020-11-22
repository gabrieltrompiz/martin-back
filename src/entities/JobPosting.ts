import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './Company';
import { JobCategory } from './JobCategory';
import { Tag } from './Tag';

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
}

@Entity()
export class JobPosting {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Company, company => company.jobPostings)
  company: Company;

  @ManyToOne(() => JobCategory, jobCategory => jobCategory.jobPostings)
  category: JobCategory;

  @Column()
  title: string;

  @Column({ nullable: true })
  salary: number; // FIXME: deberia ser number???

  @Column()
  description: string

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

};