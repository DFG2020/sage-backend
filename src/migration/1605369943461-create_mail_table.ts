import {MigrationInterface, QueryRunner} from "typeorm";

export class createMailTable1605369943461 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE IF NOT EXISTS mails ( ' +
            'mail_id UUID DEFAULT uuid_generate_v4 () NOT NULL, ' +
            'user_id UUID DEFAULT uuid_generate_v4 (), ' +
            'date_received TIMESTAMP NOT NULL, ' +
            'staff_initial VARCHAR NOT NULL, ' +
            'mail_type INTEGER NOT NULL, ' +
            'sender VARCHAR NOT NULL, ' +
            'remark TEXT, ' +
            'date_pickeup TIMESTAMP NOT NULL, ' +
            'signature UUID, ' +
            'status VARCHAR, ' +
            'PRIMARY KEY (mail_id), ' +
            'CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users (user_id), ' +
            'CONSTRAINT fk_sign FOREIGN KEY(signature) REFERENCES images (image_id) ' +
            ');'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE mails');
    }
}
