import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function AppHome() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Growina embedded werkt ✅</h1>
      <p>Nu kunnen we Polaris UI + dashboard bouwen.</p>
    </div>
  );
}