import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/api/auth/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard")
      if (isDashboardRoute) {
        if (isLoggedIn) return true
        return false // Redirect to login
      }
      return true
    },
  },
} satisfies NextAuthConfig
