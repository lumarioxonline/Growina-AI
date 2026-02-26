import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// Polaris CSS via URL (werkt met Vite)
import "@shopify/polaris/build/esm/styles.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: polarisStyles },
];

export const meta: MetaFunction = () => [
  { title: "Growina" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  // hier kan later auth/session in; voor nu leeg zodat app kan starten
  return null;
}

export default function App() {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
