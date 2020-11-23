import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { JobPosting } from './JobPosting';

@Entity()
export class SubCategory {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, category => category.subCategories)
  category: Category;

  @OneToMany(() => JobPosting, jobPosting => jobPosting.subCategory)
  jobPostings: JobPosting[]

}