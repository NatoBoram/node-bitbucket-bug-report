import { test } from "vitest"
import { loadEnv } from "./load_env.js"

test("loadEnv", ({ expect }) => {
	const parsed = loadEnv()
	expect(parsed).toBeDefined()

	expect(parsed.NODE_ENV).toBe("test")
})
