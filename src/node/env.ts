import { loadEnv } from "./load_env.js"

const parsed = loadEnv()

function envString(key: string) {
	const value = parsed[key]
	if (!value) throw new Error(`$${key} is missing`)
	return value
}

function envUrl(key: string) {
	const str = envString(key)
	try {
		return new URL(str)
	} catch (error) {
		throw new Error(`$${key} is not a URL: ${str}`, { cause: error })
	}
}

export const BITBUCKET_BASE_URL: URL = envUrl("BITBUCKET_BASE_URL")
export const BITBUCKET_TOKEN: string = envString("BITBUCKET_TOKEN")
