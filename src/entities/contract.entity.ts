import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity({ name: "contracts" })
export class Contract extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  jobTitle: string;

  @Column()
  seniority: string;

  @Column()
  jobResponsibilities: string;

  @Column()
  country: string;

  @Column()
  province: string;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column()
  clientSignature: string;

  @Column()
  contractorSignature: string;

  @Column()
  paymentRate: string;

  @Column()
  paymentDue: string;

  @Column()
  invoiceCycleEnds: Date;

  @Column()
  paymentFrecuency: string;

  @Column()
  invoiceCycle: string;

  @Column()
  noticePeriod: string;

  @Column()
  firstPaymentDate: Date;

  @Column()
  endPaymentDate: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
