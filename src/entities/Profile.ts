import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './User';

export enum Language {
  'ESP',
  'EN'
};

@Entity()
export class Profile {

  @ManyToOne(() => User, user => user.profiles)
  user: User;

  @Column()
  professionalDescription: string;

  @Column()
  professionalExperience: string;

  @Column()
  educationBackground: string;

  @Column({ 
    type: 'enum',
    enum: Language,
    default: Language.ESP
  })
  language: Language;

};