import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserTable1605368926157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE users ( ' +
            'user_id VARCHAR(32) NOT NULL, ' +
            'first_name VARCHAR NOT NULL , ' +
            'middle_name VARCHAR, ' +
            'last_name VARCHAR NOT NULL, ' +
            'address_line TEXT, ' +
            'au_first_name VARCHAR, ' +
            'au_last_name VARCHAR, ' +
            'au_middle_name VARCHAR, ' +
            'photo_id VARCHAR(32), ' +
            'PRIMARY KEY (user_id) ' +
            '); ' +
            'CREATE INDEX ON users ((lower(last_name))); ' +
            'CREATE INDEX ON users ((lower(first_name))); '
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE users');
    }

}
