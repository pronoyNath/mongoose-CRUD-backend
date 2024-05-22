# CRUD-BY-MONGOOSE & TYPESCRIPT

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (version 16 or above recommended).
- You have a package manager installed, such as npm or yarn.

## Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/pronoyNath/mongoose-CRUD-backend.git
    ```

2. Navigate to the project directory and install the dependencies:

    ```sh
    cd mongoose-CRUD-backend
    npm install
    ```

Done! You are now ready to use the project.

## Packages Used

### Dependencies

- **cors**: ^2.8.5  
  Middleware for enabling CORS (Cross-Origin Resource Sharing).

- **dotenv**: ^16.4.5  
  Loads environment variables from a `.env` file into `process.env`.

- **express**: ^4.19.2  
  Web framework for Node.js.

- **mongoose**: ^8.4.0  
  MongoDB object modeling tool designed to work in an asynchronous environment.

- **zod**: ^3.23.8  
  TypeScript-first schema declaration and validation library.

### DevDependencies

- **@eslint/js**: ^9.3.0  
  ESLint's core JS functionality as a separate package.

- **@types/cors**: ^2.8.17  
  TypeScript definitions for CORS.

- **@types/express**: ^4.17.21  
  TypeScript definitions for Express.

- **@typescript-eslint/eslint-plugin**: ^7.9.0  
  ESLint plugin for TypeScript-specific linting rules.

- **@typescript-eslint/parser**: ^7.9.0  
  Parser for TypeScript code to be linted by ESLint.

- **eslint**: ^8.57.0  
  Pluggable linting utility for JavaScript and TypeScript.

- **globals**: ^15.3.0  
  A list of global variables for various environments.

- **prettier**: ^3.2.5  
  Code formatter to ensure consistent code style.

- **typescript-eslint**: ^7.9.0  
  Monorepo for all the tooling which enables ESLint to support TypeScript.

## Usage

### Scripts

- `start`: Start the application using the compiled JavaScript files.
- `start:prod`: Start the application using nodemon for hot-reloading.
- `start:dev`: Start the application in development mode with `ts-node-dev`.
- `build`: Compile the TypeScript code to JavaScript.
- `lint`: Run ESLint to check for linting errors.
- `lint:fix`: Run ESLint and automatically fix linting errors.
- `prettier`: Run Prettier to format code.
- `prettier:fix`: Run Prettier and automatically fix formatting issues.
- `test`: Placeholder for running tests (currently not specified).
