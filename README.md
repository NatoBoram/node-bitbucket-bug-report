# Bug report for `bitbucket`

This repository reproduces 2 bugs from the `bitbucket` package.

The minimal reproduction steps are in `src/client.ts`.

```ts
import type { APIClient } from "bitbucket"
import { Bitbucket } from "bitbucket"
import { BITBUCKET_BASE_URL, BITBUCKET_TOKEN } from "./node/env.js"

export const bitbucket: APIClient = new Bitbucket({
	auth: { token: BITBUCKET_TOKEN },
	baseUrl: BITBUCKET_BASE_URL.toString(),
	request: { agent: "@natoboram/node-bitbucket-bug-report", fetch: fetch },
})
```

## SyntaxError: The requested module 'bitbucket' does not provide an export named 'Bitbucket'

```log
/home/nato/Code/github.com/NatoBoram/node-bitbucket-bug-report/src/client.ts:2
import { Bitbucket } from "bitbucket"
         ^

SyntaxError: The requested module 'bitbucket' does not provide an export named 'Bitbucket'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:171:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:254:5)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:482:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
```

To reproduce this bug, run the following commands:

```sh
git clone git@github.com:NatoBoram/node-bitbucket-bug-report.git
cd node-bitbucket-bug-report
# Create a `.env.local` file
pnpm install
pnpm run dev
```

## A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled

```log
node_modules/.pnpm/bitbucket@2.12.0/node_modules/bitbucket/src/error/types.ts:4:1 - error TS1287: A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled.

4 export abstract class HTTPError extends Error {
  ~~~~~~


Found 1 error in node_modules/.pnpm/bitbucket@2.12.0/node_modules/bitbucket/src/error/types.ts:4
```

To reproduce this bug, run the following commands:

```sh
git clone git@github.com:NatoBoram/node-bitbucket-bug-report.git
cd node-bitbucket-bug-report
# Create a `.env.local` file
pnpm install
pnpm run build
```
