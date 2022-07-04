import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    createCode(phone: string): Promise<{
        phone: string;
        value: string;
    }>;
    verifyCode(phone: string, value: string): Promise<void>;
    create(phone: string, password: string): Promise<User>;
    findOne(userIdx: string): Promise<User>;
    update(userIdx: string, attrs: Partial<User>): Promise<User>;
    remove(userIdx: string): Promise<User>;
}
