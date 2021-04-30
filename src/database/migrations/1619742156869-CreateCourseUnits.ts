import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseUnits1619742156869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "courseunits",
                columns: [
                    {
                        name:"id", 
                        type :"varchar",
                        isPrimary: true,
                    },
                    {
                      name:"name",
                      type:"varchar"
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    
                    
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courseunits");
    }

}