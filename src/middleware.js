import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(); // Ensure this is correctly returned

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Ensures Clerk middleware runs on all relevant routes
    "/api/(.*)", // Ensures API routes use Clerk authentication
  ],
};
