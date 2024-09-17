import { describe, test } from "vitest"
import { isNodeEnv, toNodeEnv } from "./node_env.js"

describe("toNodeEnv", () => {
	test("development", ({ expect }) => {
		const result = toNodeEnv("development")
		expect(result).toBe("development")
	})

	test("production", ({ expect }) => {
		const result = toNodeEnv("production")
		expect(result).toBe("production")
	})

	test("test", ({ expect }) => {
		const result = toNodeEnv("test")
		expect(result).toBe("test")
	})

	test("invalid", ({ expect }) => {
		const result = toNodeEnv("invalid")
		expect(result).toBe("development")
	})
})

describe("isNodeEnv", () => {
	test("development", ({ expect }) => {
		const result = isNodeEnv("development")
		expect(result).toBe(true)
	})

	test("production", ({ expect }) => {
		const result = isNodeEnv("production")
		expect(result).toBe(true)
	})

	test("test", ({ expect }) => {
		const result = isNodeEnv("test")
		expect(result).toBe(true)
	})

	test("invalid", ({ expect }) => {
		const result = isNodeEnv("invalid")
		expect(result).toBe(false)
	})
})
