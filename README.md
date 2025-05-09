# PosDesenvolvimentoWeb

## Project Description

This project is part of the "Curso de Pós-Graduação Lato Sensu em Computação - Desenvolvimento de Software para Web - 2024" program, specifically for the module "Desenvolvimento de Software do Front ao Back End".

The project implements the requirements from `base/Atividade1`, which involves:

- Developing a Node.js application
- Processing product data from a JSON file
- Filtering products based on allowed categories using an external API
- Generating a processed output file

## Features

- Reads product data from `base/products.json`
- Validates product categories using the external API endpoint
- Filters out products with non-allowed categories
- Generates a processed output file with allowed products

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd PosDesenvolvimentoWeb
```

2. Install dependencies:

```bash
npm install
```

## Usage

To run the application in development mode:

```bash
npm run dev
```

To build the TypeScript project:

```bash
npm run build
```

## Project Structure

```
.
├── base/
│   └── products.json        # Source product data
├── src/
│   ├── index.ts            # Main application code
│   └── index.js            # Compiled JavaScript
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Dependencies

- axios: ^1.9.0
- skeleton: git+https://github.com/ifloor/PosDesenvolvimentoWebSkeleton.git
- typescript: ^5.8.3
- ts-node: ^10.9.2

## API Endpoint

The application uses the following API endpoint to validate product categories:

```
https://posdesweb.igormaldonado.com.br/api/allowedCategory?category={category}
```

## License

MIT License

Copyright (c) 2024 Davi Ribeiro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
