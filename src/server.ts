import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  // para inserir o name no banco de dados
  await knex("courses").insert({ name });
  //mesma coisa usando SQL
  //await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);

  response.status(201).json({ name });
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
