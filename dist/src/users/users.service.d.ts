import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { UpdateLocationDto } from './dtos/update-location.dto';
import { SignInResponseDto } from 'src/common/responses/users/sign-in.response.dto';
import { Pin } from 'src/pins/pin.entity';
import { Moment } from 'src/moments/moment.entity';
import { UpdateUserInfo } from './dtos/update-userInfo.dto';
import { Cache } from 'cache-manager';
export declare class UsersService {
    private cacheManager;
    private repo;
    private pinRepo;
    private momentRepo;
    private jwtService;
    private connection;
    constructor(cacheManager: Cache, repo: Repository<User>, pinRepo: Repository<Pin>, momentRepo: Repository<Moment>, jwtService: JwtService, connection: Connection);
    createUser(email: string, password: string): Promise<{
        userIdx: number;
        email: string;
    }>;
    signIn(email: string, password: string): Promise<SignInResponseDto>;
    updateUserInfo(userIdx: number, attrs: Partial<UpdateUserInfo>): Promise<User>;
    updateUserLocation(userIdx: number, location: UpdateLocationDto): Promise<import("typeorm").UpdateResult>;
    getDetailUserInfo(userIdx: number): Promise<{}>;
    findActiveUserByUserIdx(userIdx: number): Promise<User>;
    findActiveUserByEmail(email: string): Promise<User>;
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
    login(payload: any): Promise<SignInResponseDto>;
    deleteUser(userIdx: number): Promise<any>;
}
