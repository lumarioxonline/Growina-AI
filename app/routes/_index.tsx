import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  if (shop) {
    const target = /auth?shop=${encodeURIComponent(shop)};
    return redirect(target);
  }

  return null;
}

export default function Index() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Growina</h1>
      <p>Homepage werkt.</p>
    </div>
  );
}