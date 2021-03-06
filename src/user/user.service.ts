import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) // <---
        private readonly userRepository: Repository<User>,  // <---
    ) { }
    findAll() {
        throw new Error("Method not implemented.");
    }
}
