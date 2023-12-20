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

## Tecnologias
![Node.JS](https://img.shields.io/badge/-node.js-43853d?style=for-the-badge&logo=node.js&logoColor=FFFFFF&labelColor=026e00)&nbsp;
![Express.JS](https://img.shields.io/badge/-express.js-868686?style=for-the-badge&logo=express&logoColor=FFFFFF&labelColor=4f4f4f)&nbsp;
![MySQL](https://img.shields.io/badge/-mysql-00758f?style=for-the-badge&logo=mysql&logoColor=FFFFFF&labelColor=005d72)&nbsp;
![Typescript](https://img.shields.io/badge/-typescript-4e9acc?style=for-the-badge&logo=typescript&logoColor=FFFFFF&labelColor=007acc)&nbsp;

## Demonstração
![image](https://github.com/lubias/desafio_7/assets/107640123/608191e7-8b93-4369-9cb2-a49d75267ca9)

)

