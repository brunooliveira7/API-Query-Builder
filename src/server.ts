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

  return response.status(201).json({ name });
});

//rota para listar os cursos
app.get("/courses", async (request: Request, response: Response) => {
  //mesma coisa usando SQL
  //const courses = await knex.raw("SELECT * FROM courses");
  const courses = await knex("courses").select().orderBy("name");

  return response.status(200).json(courses);
});

//rota para atualizar um curso
app.put("/courses/:id", async (request: Request, response: Response) => {
  //params - para pegar o id da rota /courses/2
  const { id } = request.params;
  const { name } = request.body;

  //where é um filtro, para não atualizar todos os cursos
  await knex("courses").update({ name }).where({ id });

  return response.json();
});

//rota para deletar um curso
app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  await knex("courses").delete().where({ id });

  return response.json();
});

//rota para cria couse_modules
app.post("/modules", async (request: Request, response: Response) => {
  const { name, course_id } = request.body;

  await knex("course_modules").insert({ name, course_id });

  return response.status(201).json();
});

//rota para listar os course_modules
app.get("/modules", async (request: Request, response: Response) => {
  const modules = await knex("course_modules").select();

  return response.json(modules);
});

app.listen(3333, () => console.log(`Server is running on port 3333`));
