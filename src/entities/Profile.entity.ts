import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';

export enum Language {
  'ESP',
  'EN'
};

@Entity({ name: 'profile' })
export class Profile {

  @PrimaryGeneratedColumn()
  id: number

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