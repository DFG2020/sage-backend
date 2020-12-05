import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ClientUser} from "./entity/client-user.entity";
import {Repository} from "typeorm";
import {UuidGenerator} from "../common/uuid-generator";

/**
 * Service responsible for the business logic around users.
 */
@Injectable()
export class ClientUserService {
    private readonly usersRepository: Repository<ClientUser>;

    constructor(@InjectRepository(ClientUser) usersRepository: Repository<ClientUser>) {
        this.usersRepository = usersRepository;
    }

    async getUser(userId: string): Promise<ClientUser | undefined> {
        return await this.usersRepository.findOne({userId: userId});
    }

    async createUser(userToCreate: ClientUser): Promise<ClientUser> {
        userToCreate.userId = UuidGenerator.generateUuid();
        return await this.usersRepository.save(userToCreate);
    }

    /**
     * Updates properties of a user.
     * @param userId the unique identifier for the user.
     * @param userToUpdate all properties of the user that need to be updated. If a property is undefined, the changes
     *                     will be propagated through the persistence layer.
     */
    async updateUser(userId: string, userToUpdate: ClientUser): Promise<ClientUser | undefined> {
        await this.usersRepository.update(userId, {
            firstName: userToUpdate.firstName,
            lastName: userToUpdate.lastName,
            middleName: userToUpdate.middleName,
            forwardingAddressLine: userToUpdate.forwardingAddressLine,
            authorizedFirstName: userToUpdate.authorizedFirstName,
            authorizedLastName: userToUpdate.authorizedLastName,
            authorizedMiddleName: userToUpdate.authorizedMiddleName,
            photoId: userToUpdate.photoId
        });

        return await this.usersRepository.findOne({userId: userId});
    }
}
