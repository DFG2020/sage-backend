import {MigrationInterface, QueryRunner} from "typeorm";

export class createImageTable1605367681348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE images ( ' +
            'image_id VARCHAR(32) NOT NULL, ' +
            'image BYTEA, ' +
            'PRIMARY KEY (image_id) ' +
            ');'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE images');
    }

}
