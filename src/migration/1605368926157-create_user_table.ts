import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserTable1605368926157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; ' +
            'CREATE TABLE IF NOT EXISTS users ( ' +
            'user_id uuid DEFAULT uuid_generate_v4 (), ' +
            'first_name VARCHAR NOT NULL , ' +
            'middle_name VARCHAR, ' +
            'last_name VARCHAR NOT NULL, ' +
            'address_line TEXT, ' +
            'au_first_name VARCHAR, ' +
            'au_last_name VARCHAR, ' +
            'au_middle_name VARCHAR, ' +
            'photo_id UUID, ' +
            'PRIMARY KEY (user_id), ' +
            'CONSTRAINT fk_image FOREIGN KEY(photo_id) REFERENCES images (image_id) ' +
            '); ' +
            'CREATE INDEX ON users ((lower(last_name)));'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE users');
    }

}
