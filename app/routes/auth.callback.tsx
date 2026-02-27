import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    await authenticate.admin(request);
    return redirect("/app");
  } catch (err: any) {
    console.error("/auth/callback error", err);
    // rethrow so Shopify lib can still respond with proper status
    throw err;
  }
};
