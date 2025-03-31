import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  //cria a tabela com nome courses
  await knex.schema.createTable("courses", (table) => {
    //cria as colunas
    table.increments("id").primary(); //auto incremento e chave primária
    table.text("name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()); //data de criação
  });
}

export async function down(knex: Knex): Promise<void> {
  //deleta a tabela
  await knex.schema.dropTable("courses");
}
