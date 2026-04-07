import NextAuth, { DefaultSession } from "next-auth"

export type UserRole = "CLIENT" | "ELEVAGE_TEST"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role?: UserRole
    } & DefaultSession["user"]
  }

  interface User {
    role?: UserRole
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role?: UserRole
  }
}
