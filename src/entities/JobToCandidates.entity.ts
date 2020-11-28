import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JobPosting } from './JobPosting.entity';
import { User } from './User.entity';

export enum Stage {
  'DRAFT',
  'SENT',
  'IN_CONVERSATION',
  'HIRED',
  'FINISHED'
}

@Entity({ name: 'job_candidate' })
export class JobToCandidate {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  jobId: number;

  @Column()
  userId: number;

  @CreateDateColumn()
  appliedIn: Date

  @Column({
    type: 'enum',
    enum: Stage
  })
  stage: Stage

  @ManyToOne(() => JobPosting, jobPosting => jobPosting.candidates)
  job: JobPosting;

  @ManyToOne(() => User, user => user.appliedTo)
  user: User;

}