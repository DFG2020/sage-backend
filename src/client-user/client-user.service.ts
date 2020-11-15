import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ClientUser} from "./entity/client-user.entity";
import {Repository} from "typeorm";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class ClientUserService {
    private readonly usersRepository: Repository<ClientUser>;

    constructor(@InjectRepository(ClientUser) usersRepository: Repository<ClientUser>) {
        this.usersRepository = usersRepository;
    }

    async getUser(userId: string): Promise<ClientUser | undefined> {
        const user: ClientUser | undefined = await this.usersRepository.findOne({userId: userId});
        return user;
    }

    async createUser(firstName: string, lastName: string): Promise<ClientUser> {
        const userId: string = uuidv4().replace(/-/g, "");

        const user: ClientUser = new ClientUser();
        user.userId = userId;
        user.firstName = firstName;
        user.lastName = lastName

        const savedUser: ClientUser = await this.usersRepository.save(user);
        return savedUser;
    }

    async updateUser(userId: string, firstName: string, lastName: string): Promise<ClientUser> {
        await this.usersRepository.update(userId, {firstName: firstName, lastName: lastName});
        const user: ClientUser | undefined = await this.usersRepository.findOne({userId: userId});
        return user;
    }
}
