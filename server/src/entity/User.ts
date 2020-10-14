import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column("text", { unique: true })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
