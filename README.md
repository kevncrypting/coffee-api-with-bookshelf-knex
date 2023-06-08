# Coffee Group Buy API Demo

This is an API demo made using [Express-Generator](https://expressjs.com/en/starter/generator.html) (with the `--no-view` and `--git` flags, to generate an Express project without a view engine and with a template .gitignore file) to practice using [Bookshelf.js](https://bookshelfjs.org/) as an ORM in conjunction with [Knex.js](http://knexjs.org/) as a query builder to access a [PostgreSQL](https://www.npmjs.com/package/pg) database of coffee beans, with a group buy order system.

In addition, [cors](https://www.npmjs.com/package/cors) was installed to provide use of CORS middleware to set the origin for accepted requests. [dotenv](https://www.npmjs.com/package/dotenv) enables the use of environment variables to store sensitive information (see .env-template file for example). [nodemon](https://www.npmjs.com/package/nodemon) automatically refreshes the server when any changes are made (use `npm run dev` to start the nodemon server)

## Features

The API provides comprehensive functionality for managing coffee bean information (protected by an authenticated route), users, and orders. You can create, read, update, and delete each of these resources.

- Each **Group Buy** is started by a **User** for a particular **Coffee Bean**, and can have many **User** participants (up to a max set by the initial User).
- Each **User** can join or create a **Group Buy** for Coffee Beans.

## Running the App Locally

To run the app locally, you'll need Node.js, npm, and PostgreSQL installed on your machine.

### Clone the repository:

```bash
git clone https://github.com/kevncrypting/coffee-api-with-bookshelf-knex.git
cd coffee-api-with-bookshelf-knex
```

### Install the dependencies:

```bash
npm install
```

### Set up the database:

First, create a new PostgreSQL database. 

Then, update the `knexfile.js` file with your database configuration (the name of your database, your username, and your password).

Then, use the `knex` command line interface to:

1. create the necessary tables and 

```bash
npx knex migrate:latest
```
2. seed them with some initial data [optional]

```bash
npx knex seed:run
```

### Start the server:

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

----

## API Documentation

The API can be accessed at the following endpoints:


| HTTP Method | Endpoint                 | Description                                                     | Required JSON Body                                         |
|-------------|--------------------------|-----------------------------------------------------------------|------------------------------------------------------------|
| GET         | /beans                   | Get all bean varieties                                          | N/A                                                        |
| POST        | /beans **AUTH**          | Create a new bean variety                                       | name, region, flavorProfile, roastLevel, price, description|
| GET         | /beans/:id               | Get a specific bean variety by ID                               | N/A                                                        |
| PUT         | /beans/:id **AUTH**      | Update a bean variety by ID                                     | name, region, flavorProfile, roastLevel, price, description|
| DELETE      | /beans/:id **AUTH**      | Delete a specific bean variety by ID                            | N/A                                                        |
| GET         | /orders **AUTH**         | Get all existing group buy orders, including participating users| N/A                                                        |
| POST        | /register                | Create (register) a new user                                            | JWT                                                        |
| POST        | /login **AUTH**          | Logs a user in                                                  | JWT                                                        |
| GET         | /user/:id **AUTH**       | Get a specific user by ID                                       | JWT                                                        |
| PUT         | /user/:id **AUTH**       | Update a specific user by ID                                    | ---                             |
| DELETE      | /user/:id **AUTH**       | Delete a specific user by ID                                    | N/A                                                        |

All `POST` and `PUT` requests must include a `Content-Type: application/json` header.

## Error Handling

In case of an error, the API will return a JSON response with a `message` property describing the error. For example:

```json
{
  "message": "There was an error"
}
```
