## API REST

## 📝 Sobre a Aplicação

A **API Query Builder** foi desenvolvida como `Node.js` e `TypeScript`, com foco na construção de uma base sólida para integração com bancos de dados relacionais.

---

## 🗄️ Integração com Banco de Dados

A aplicação se conecta a um banco de dados relacional, cuja estrutura foi modelada e visualizada por meio do **Beekeeper Studio**. Foram implementados relacionamentos entre tabelas utilizando **chaves primárias** e **chaves estrangeiras**, respeitando a integridade referencial.

Essas tabelas estão relacionadas por meio de vínculos como:

- Um usuário pode ter vários cursos (relação 1:N).
- Um curso pode agrupar vários assunto.
- As cursos referenciam o ID do usuário e os assuntos com o uso de chaves estrangeiras.

---

## 🔍 Funcionalidades Gerais da API

- CRUD completo (Create, Index, Update, Delete)
- Validação de dados com `Zod`
- Estrutura organizada com uso de `Express` e `TypeScript`
- Manipulação de dados com `query builder`
- Tratamento de erros centralizado
- Organização modular por rotas, controladores e serviços

---

## 🎯 Objetivo

O principal objetivo desta aplicação é **praticar a integração entre o backend em Node.js e bancos de dados relacionais**, aplicando boas práticas de modelagem, validação e estruturação de APIs modernas e escaláveis.

---

<p align="center">
  <img alt="License" src="https://github.com/brunooliveira7/API-Query-Builder/blob/main/assets/Query%20Builder.png">
</p>
