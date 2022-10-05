import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends CoreEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: '', nullable: true })
  phoneNum: string;

  @Column({ default: false, nullable: true })
  verified: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<boolean> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
        return true;
      } catch (error) {
        new InternalServerErrorException();
      }
    }
  }

  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      const ok = await bcrypt.compare(aPassword, this.password);
      return ok;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
