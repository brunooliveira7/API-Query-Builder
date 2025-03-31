import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course_modules", (table) => {
    table.increments("id").primary();
    table.text("name").notNullable();
    //coluna de chave estrangeira - relacionar com a tabela de cursos
    table
      .integer("course_id")
      .notNullable()
      .references("id")
      .inTable("courses");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("courses_modules");
}
