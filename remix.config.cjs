/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildPath: "build/server.js",
  serverModuleFormat: "esm",
  serverDependenciesToBundle: [/^@shopify\/polaris/]
};