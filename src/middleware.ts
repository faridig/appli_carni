import { auth } from "@/auth"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard")

  if (isDashboardRoute && !isLoggedIn) {
    return Response.redirect(new URL("/api/auth/signin", nextUrl))
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
