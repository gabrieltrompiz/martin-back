import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './Profile';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  photoUrl: string;

  @OneToMany(() => Profile, profile => profile.user)
  profiles: Profile[];

  @Column({ unique: true })
  phoneNumber: string;

  @Column({ nullable: true })
  linkedInUrl: string;

  @Column({ nullable: true })
  portfolioUrl: string;

  @Column({ nullable: false })
  githubUrl: string;

};