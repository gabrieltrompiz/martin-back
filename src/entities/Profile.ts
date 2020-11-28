import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

export enum Language {
  'ESP',
  'EN'
};
registerEnumType(Language, { name: 'Language' });

@ObjectType()
@Entity({ name: 'profile' })
export class Profile {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(type => User)
  @ManyToOne(() => User, user => user.profiles)
  user: User;

  @Field(type => String)
  @Column()
  professionalDescription: string;

  @Field(type => String)
  @Column()
  professionalExperience: string;

  @Field(type => String)
  @Column()
  educationBackground: string;

  @Field(type => Language)
  @Column({ 
    type: 'enum',
    enum: Language,
    default: Language.ESP
  })
  language: Language;

};