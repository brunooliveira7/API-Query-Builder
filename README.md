## API REST

## 📝 Sobre a Aplicação

A **API Query Builder** foi desenvolvida como `Node.js` e `TypeScript`, com foco na construção de uma base sólida para integração com bancos de dados relacionais.

---

## 🗄️ Integração com Banco de Dados

A aplicação se conecta a um banco de dados relacional, cuja estrutura foi modelada e visualizada por meio do **Beekeeper Studio**. Foram implementados relacionamentos entre tabelas utilizando **chaves primárias** e **chaves estrangeiras**, respeitando a integridade referencial.

O diagrama disponível no repositório demonstra claramente a estrutura lógica do banco, incluindo tabelas como:

- `users`
- `tasks`
- `projects`
- entre outras...

Essas tabelas estão relacionadas por meio de vínculos como:

- Um usuário pode ter várias tarefas (relação 1:N).
- Um projeto pode agrupar várias tarefas.
- As tarefas referenciam o ID do usuário e do projeto como chaves estrangeiras.

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


<p align="center">
  <img alt="License" src="https://github.com/brunooliveira7/API-Query-Builder/blob/main/assets/Query%20Builder.png">
</p>
