import express, { Request, Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

//rota para criar um curso
app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body;

  // para inserir o name no banco de dados
  await knex("courses").insert({ name });
  //mesma coisa usando SQL
  //await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);

  response.status(201).json({ name });
});

//rota para listar os cursos
app.get("/courses", async (request: Request, response: Response) => {
  //mesma coisa usando SQL
  //const courses = await knex.raw("SELECT * FROM courses");
  const courses = await knex("courses").select().orderBy("name");
  response.status(200).json(courses);
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
