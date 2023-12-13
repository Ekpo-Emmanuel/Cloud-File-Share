import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({
  afterAuth(auth, req, evt) {

    // Redirect all users who are not logged in but who are visiting a protected page to the sign-in route.
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    //If the user is signed in and accessing a protected route, allow them to access it.
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next()
    }
    // publicRoutes: req => !req.url.includes('/files')
  },
  publicRoutes: ['/', '/sign-in', '/sign-up', '/about', '/contact'],
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

