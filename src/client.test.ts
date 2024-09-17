import { test } from "vitest"
import { bitbucket } from "./client.js"

test("bitbucket", ({ expect }) => {
	expect(bitbucket).toBeDefined()
})
