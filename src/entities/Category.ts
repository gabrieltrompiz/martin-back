import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategory } from './SubCategory';

@ObjectType()
@Entity({ name: 'category' })
export class Category {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => [SubCategory])
  @OneToMany(() => SubCategory, subCategory => subCategory.category)
  subCategories: SubCategory[];

};