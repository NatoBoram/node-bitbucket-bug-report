import type { APIClient } from "bitbucket"
import { Bitbucket } from "bitbucket"
import { BITBUCKET_BASE_URL, BITBUCKET_TOKEN } from "./node/env.js"

export const bitbucket: APIClient = new Bitbucket({
	auth: { token: BITBUCKET_TOKEN },
	baseUrl: BITBUCKET_BASE_URL.toString(),
	request: { agent: "@natoboram/node-bitbucket-bug-report", fetch: fetch },
})
