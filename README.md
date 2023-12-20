# Testes
Este projeto foi desenvolvido como resolução para o desafio 7 da formação de Tecnologia da escola DNC.

## Instalação 
##### Clone o repositório:
```
$ git clone https://github.com/lubias/desafio_7.git
```

##### Acesse a pasta criada:
```
$ cd desafio_7
```

##### Crie o banco de dados MySQL e as tabelas a seguir:
```mysql
CREATE TABLE `aluno` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`nacionalidade` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=5
;
```

##### Configure o banco de dados no ficheiro knex.ts (src/config/knex.ts):
```javascript
const knexConfig: KnexConfig = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'desafio_7',
  },
};
```

##### Instale as dependências:
```
$ npm install
```

##### Inicie o projeto:
```
$ npm test --config=jest.config.ts
```
