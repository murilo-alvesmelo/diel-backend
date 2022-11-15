# API Rest - NodeJs + Express + Postgres
 
Api que alimenta o projeto [react-native-tasks](https://github.com/murilo-alvesmelo/react-native-tasks.git)


## Rodando localmente

Clone o projeto

```bash
  $ git clone https://github.com/murilo-alvesmelo/diel-backend.git
```

Entre no diretório do projeto

```bash
  $ cd diel-backend
```

Instale as dependências

```bash
  $ npm install
```

Inicie a aplicação

```bash
  $ npm start
```


## Dependências utilizadas

- Web services
    - express
    - body-parser
    - cors
    - consign
- Conexão com o database
    - pg
    - knex
## Entidades do banco de dados

Para essa aplicação e criada uma integração com um servidor de banco de dados Postgres no localhost da sua maquina:

**Entidades da tabela tasks:**

```javascript

exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
      table.string('desc').notNullable()
      table.dateTime('estimatedAt')
      table.time('duracao')
      table.dateTime('doneAt')
  })
};
```

### Rotas do CRUD de tasks

#### Envia os parâmetros para API para o cadastro da task
```http
   POST http://localhost:3000/tasks
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `task`   | `object` | **Obrigatório**|


#### Faz uma atualização no campo escolhido da task 
```http
   PUT http://localhost:3000/task/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `task`   | `object` | **Obrigatório**|
| `id`      | `number` | **Obrigatório**  |

#### Deleta a task pelo ID

```http
   DELETE http://localhost:3000/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `task`   | `object` | **Obrigatório**|
| `id`      | `number` | **Obrigatório**|

## Autores

- [@murilo-alvesmelo](https://github.com/murilo-alvesmelo)


## Licença
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[MIT](https://choosealicense.com/licenses/mit/)
