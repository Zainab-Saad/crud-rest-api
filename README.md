# crud-rest-api
REST API with Express.js, Node.js, PostgreSQL
Connect to postgreSQL database using node-postgres

## API Endpoints
The following endpoints are implemented:
- GET: / | displayHome()
- GET: /users | getUsers()
- GET: /users/:id | getUserById()
- POST: /users | createUser()
- PUT: /users/:id | updateUser()
- DELETE: /users/:id | deleteUser()

## Database Setup
To run this project, you need postgreSQL installed on your system.

Launch psql client and follow the steps:

```
postgres=# CREATE ROLE zainab WITH LOGIN PASSWORD 'password';
```

Give Create Db permissions to ROLE

```
ALTER ROLE zainab CREATEDB;
```

You can list roles using `\du`

```
zainab          | Create DB                           | {}
postgres        | Superuser, Create role, Create DB   | {}
```

Then create a db with OWNER as:
```
postgres=# CREATE DATABASE crud_api WITH OWNER zainab;
```

and exit the running postgres instance

Connect to psql client with the newly created role and database

```
crud_api=> CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));
```

insert dummy data as:

```
crud_api=> INSERT INTO users (name, email) VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example com');
```

Display users data as:

```
crud_api=> SELECT * FROM users;
```


Now, you have database setup is done, the express server can be launched using 
```
npm start
```

## API Testing

The API endpoints can be tested with a VSCode Extension - Thunder Client