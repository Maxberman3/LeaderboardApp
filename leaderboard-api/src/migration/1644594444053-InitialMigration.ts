import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1644594444053 implements MigrationInterface {
    name = 'InitialMigration1644594444053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_scores" ("id" SERIAL NOT NULL, "score" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_caf56c8fd1af4eeddd1aee555ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_scores" ADD CONSTRAINT "FK_865918fff5764bf21739e0eb6a3" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE VIEW "leader_board_view" AS 
		SELECT 
		users.id AS user_id,
		users.name AS user_name,
		MAX(user_scores.score) AS high_score
		FROM users
		LEFT JOIN user_scores ON 
			users.id = user_scores.user_id
		GROUP BY(users.id, users.name)
	`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","leader_board_view","SELECT \n\t\tuser_id,\n\t\tusers.name AS user_name,\n\t\tMAX(user_scores.score) AS high_score\n\t\tFROM users\n\t\tLEFT JOIN user_scores ON \n\t\t\tusers.id = user_scores.user_id\n\t\tGROUP BY(users.id)"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","leader_board_view","public"]);
        await queryRunner.query(`DROP VIEW "leader_board_view"`);
        await queryRunner.query(`ALTER TABLE "user_scores" DROP CONSTRAINT "FK_865918fff5764bf21739e0eb6a3"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_scores"`);
    }

}
