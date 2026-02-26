/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildPath: "build/server.js",
  serverDependenciesToBundle: [/^@shopify\/polaris/],
};