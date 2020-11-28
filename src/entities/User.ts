import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobToCandidate } from './JobToCandidates';
import { Profile } from './Profile';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => String)
  @Column({ unique: true })
  email: string;

  @Field(type => String)
  @Column()
  password: string;

  @Field(type => String)
  @Column()
  photoUrl: string;

  @Field(type => [Profile])
  @OneToMany(() => Profile, profile => profile.user)
  profiles: Profile[];

  @Field(type => String, { nullable: true })
  @Column({ unique: true })
  phoneNumber: string;

  @Field(type => String, { nullable: true })
  @Column({ nullable: true })
  linkedInUrl: string;

  @Field(type => String, { nullable: true })
  @Column({ nullable: true })
  portfolioUrl: string;

  @Field(type => String, { nullable: true })
  @Column({ nullable: false })
  githubUrl: string;

  @Field(type => [JobToCandidate])
  @OneToMany(() => JobToCandidate, jobToCandidate => jobToCandidate.user)
  appliedTo: JobToCandidate[];

};