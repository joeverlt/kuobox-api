import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createContract1672085494438 implements MigrationInterface {
  name = "createContract1672085494438";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "contracts",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "job_title",
            type: "varchar",
          },
          {
            name: "seniority",
            type: "varchar",
          },
          {
            name: "job_responsibilities",
            type: "varchar",
          },
          {
            name: "country",
            type: "varchar",
          },
          {
            name: "province",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "client_signature",
            type: "varchar",
          },
          {
            name: "contractor_signature",
            type: "varchar",
          },
          {
            name: "payment_rate",
            type: "decimal",
          },
          {
            name: "payment_due",
            type: "date",
          },
          {
            name: "invoice_cycle_ends",
            type: "date",
          },
          {
            name: "payment_frecuency",
            type: "varchar",
          },
          {
            name: "invoice_cycle",
            type: "varchar",
          },
          {
            name: "notice_period",
            type: "varchar",
          },
          {
            name: "first_payment_date",
            type: "date",
          },
          {
            name: "end_payment_date",
            type: "date",
          },
          {
            name: "start_date",
            type: "time",
          },
          {
            name: "end_date",
            type: "time",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("contracts");
  }
}
