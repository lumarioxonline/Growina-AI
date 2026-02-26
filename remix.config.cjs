/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildPath: "build/server.js",
  serverModuleFormat: "esm",
  // Dit is de fix voor Polaris CSS imports in SSR:
  serverDependenciesToBundle: [/^@shopify\/polaris/],
};