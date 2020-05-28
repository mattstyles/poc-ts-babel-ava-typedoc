
# POC for a start pack

Included libraries:
* Typedoc -> to enable documentation from types and magic comments
* Typescript -> to enable documentation (and get other stuff besides)
* Standard -> to enable linting of a project
* Ava -> to enable testing of a project

Commands:
* `npm run build` -> builds JS files to run
* `npm run test` -> tests source files
* `npm run lint` -> lints source files
* `npm run build:types` -> outputs only the type definition files (concatenated)
* `npm run build:docs` -> builds typedoc documentation

`npm run start` runs a script that uses the built output.
