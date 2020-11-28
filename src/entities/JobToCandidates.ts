import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting';
import { User } from './User';

export enum Stage {
  'DRAFT',
  'SENT',
  'IN_CONVERSATION',
  'HIRED',
  'FINISHED'
};
registerEnumType(Stage, { name: 'Stage' });

@ObjectType()
@Entity({ name: 'job_candidate' })
export class JobToCandidate {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(type => Int)
  @Column()
  jobId: number;

  @Field(type => Int)
  @Column()
  userId: number;

  @Field(type => String)
  @CreateDateColumn()
  appliedIn: Date

  @Field(type => Stage)
  @Column({
    type: 'enum',
    enum: Stage
  })
  stage: Stage

  @Field(type => JobPosting)
  @ManyToOne(() => JobPosting, jobPosting => jobPosting.candidates)
  job: JobPosting;

  @Field(type => User)
  @ManyToOne(() => User, user => user.appliedTo)
  user: User;

}