# SIEHA - Simple Express-Handlebars Admin

[![Latest Version](https://img.shields.io/github/v/release/kiwfy/simple-express-handlebars-admin.svg?style=flat-square)](https://github.com/kiwfy/simple-express-handlebars-admin/releases)
[![Build Status](https://img.shields.io/github/workflow/status/kiwfy/simple-express-handlebars-admin/CI?label=ci%20build&style=flat-square)](https://github.com/kiwfy/simple-express-handlebars-admin/actions?query=workflow%3ACI)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

SIEHA stands for Simple Express-Handlebars Admin.

The project has 3 main folders inside the `src` folder:

- `routes` - contém as rotas para acesso das páginas do front. As rotas do frontend (que renderizam as páginas da aplicação) podem ser adicionadas no arquivo `dashboard.js`. As rotas do backend podem ser incluídas no arquivo `api.js`.
- `utils` - contém os helpers customizados do express-hbs.
- `views` - contém os arquivos .hbs para o frontend da aplicação, incluindo páginas e layouts.

### Installation

Requires [NodeJs](https://nodejs.org/en/download/).

Run [npm](https://www.npmjs.com/get-npm) to install all dependencies.

```sh
npm install
```

### Run Admin

Use local or start with [Docker](https://docs.docker.com/get-docker/) using compose tool.

```sh
docker-compose up
```

### Special thanks to
> https://startbootstrap.com/themes/sb-admin-2/

### Development

Want to contribute? Great!

The project using a simple code.
Make a change in your file and be careful with your updates!
**Any new code will only be accepted with all validations.**

To ensure that the entire project is fine:

Run all validations

```sh
$ npm run check
```

**Kiwfy - Open code, open mind!**
