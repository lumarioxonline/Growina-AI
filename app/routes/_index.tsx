import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  // Als Shopify je app opent, zit er altijd ?shop=...
  if (shop) {
    return redirect(/auth?shop=${encodeURIComponent(shop)});
  }

  // Geen shop param = normale website/home
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