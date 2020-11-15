import {MigrationInterface, QueryRunner} from "typeorm";

export class createMailTable1605369943461 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE mails ( ' +
            'mail_id VARCHAR(32) NOT NULL, ' +
            'user_id VARCHAR(32) NOT NULL, ' +
            'date_received TIMESTAMP NOT NULL, ' +
            'staff_initial VARCHAR NOT NULL, ' +
            'mail_type INTEGER NOT NULL, ' +
            'sender VARCHAR NOT NULL, ' +
            'remark TEXT, ' +
            'date_pickeup TIMESTAMP NOT NULL, ' +
            'signature VARCHAR(32), ' +
            'status VARCHAR, ' +
            'PRIMARY KEY (mail_id) ' +
            ');' +
            'CREATE INDEX ON mails (user_id); '
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE mails');
    }
}
