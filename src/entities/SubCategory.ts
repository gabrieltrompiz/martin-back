import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { JobPosting } from './JobPosting';

@ObjectType()
@Entity({ name: 'subcategory' })
export class SubCategory {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => Category)
  @ManyToOne(() => Category, category => category.subCategories)
  category: Category;

  @Field(type => [JobPosting])
  @OneToMany(() => JobPosting, jobPosting => jobPosting.subCategory)
  jobPostings: JobPosting[]

}