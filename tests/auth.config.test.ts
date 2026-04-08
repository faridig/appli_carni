import { describe, it, expect } from "vitest"
import { authConfig } from "../src/auth.config"
import { NextRequest } from "next/server"

interface ProviderWithId {
  id?: string
  name?: string
}

describe("Auth Configuration", () => {
  it("should have Google provider configured", () => {
    const googleProvider = authConfig.providers.find(
      (p) => {
        const provider = p as ProviderWithId
        return provider.id === "google" || provider.name === "Google"
      }
    )
    expect(googleProvider).toBeDefined()
  })

  describe("authorized callback", () => {
    it("should return true for non-dashboard routes even if not logged in", () => {
      const url = new URL("http://localhost/")
      const result = authConfig.callbacks?.authorized?.({
        auth: null,
        request: { nextUrl: url } as unknown as NextRequest,
      })
      expect(result).toBe(true)
    })

    it("should return false for dashboard routes if not logged in", () => {
      const url = new URL("http://localhost/dashboard")
      const result = authConfig.callbacks?.authorized?.({
        auth: null,
        request: { nextUrl: url } as unknown as NextRequest,
      })
      expect(result).toBe(false)
    })

    it("should return true for dashboard routes if logged in", () => {
      const url = new URL("http://localhost/dashboard")
      const result = authConfig.callbacks?.authorized?.({
        auth: { user: { name: "Test User" }, expires: "" },
        request: { nextUrl: url } as unknown as NextRequest,
      })
      expect(result).toBe(true)
    })
  })
})
