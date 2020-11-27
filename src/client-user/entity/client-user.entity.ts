import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'users'})
export class ClientUser {
    @PrimaryColumn({name: 'user_id'})
    userId: string;

    @Column({name: 'first_name'})
    firstName: string;

    @Column({name: 'last_name'})
    lastName: string;

    @Column({name: 'middle_name'})
    middleName?: string;

    @Column({name: 'address_line'})
    forwardingAddressLine?: string;

    @Column({name: 'au_first_name'})
    authorizedFirstName?: string;

    @Column({name: 'au_last_name'})
    authorizedLastName?: string;

    @Column({name: 'au_middle_name'})
    authorizedMiddleName?: string;

    @Column({name: 'photo_id'})
    photoId?: string;
}
