
# POC for a start pack

## Included libraries

* Typedoc -> to enable documentation from types and magic comments
* Typescript -> to enable documentation (and get other stuff besides)
* Standard -> to enable linting of a project
* Ava -> to enable testing of a project

## Commands

* `npm run build` -> builds JS files to run
* `npm run test` -> tests source files
* `npm run lint` -> lints source files
* `npm run build:types` -> outputs only the type definition files (concatenated)
* `npm run build:docs` -> builds typedoc documentation

`npm run start` runs a script that uses the built output.

## Gotchas

* Typedoc shares the `tsconfig.json`, which is usually fine, but, here we’re using Babel to produce the output and only using tsc to output the definitions, which we are placing in to a single file. The single file output does not place nice with Typedoc so we need to specify the outFile to the tsc command, rather than in the config. Then all is happy.
