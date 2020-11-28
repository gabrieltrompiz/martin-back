import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategory } from './SubCategory';

@Entity({ name: 'category' })
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SubCategory, subCategory => subCategory.category)
  subCategories: SubCategory[];

};