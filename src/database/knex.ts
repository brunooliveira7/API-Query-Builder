//conexão com o banco de dados - acessar e manipular o banco de dados
import { knex as knexConfig } from "knex";
import config from "../../knexfile";

export const knex = knexConfig(config);