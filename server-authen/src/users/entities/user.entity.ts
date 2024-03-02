/* eslint-disable prettier/prettier */
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';

  export enum UserRole {
    ADMIN = 'admin',
    PARENT = 'parent',
    CHILDREN = 'children',
  }

  @Entity('user')
  export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false })
    name: string;
  
    @Column({ unique: true, nullable: false })
    email: string;
  
    @Column({ nullable: false })
    password: string;
  
    @Column({ nullable: true, default: "" })
    phone: string;

    @Column({ nullable: true, default: "" })
    image: string;
  
    @Column({ nullable: true })
    address: string;
  
    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.PARENT
    })
    role: UserRole;
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
  
    @Column({ type: 'date', nullable: true })
    birthdate: Date;
  
   @Column({nullable: true, default: "Male"})
    gender: string;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
  
