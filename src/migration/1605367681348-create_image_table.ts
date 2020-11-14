import {MigrationInterface, QueryRunner} from "typeorm";

export class createImageTable1605367681348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; ' +
            'CREATE TABLE IF NOT EXISTS images ( ' +
            'image_id uuid DEFAULT uuid_generate_v4 (), ' +
            'image BYTEA, ' +
            'PRIMARY KEY (image_id) ' +
            ');'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE images');
    }

}
