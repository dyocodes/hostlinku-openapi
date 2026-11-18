#!/usr/bin/env node
// Validates openapi.json and postman/hostlinku-api.postman_collection.json (zero dependencies).
import fs from "node:fs";

const openapi = JSON.parse(fs.readFileSync("openapi.json", "utf8"));
if (!String(openapi.openapi || "").startsWith("3.1")) {
  throw new Error(`Expected OpenAPI 3.1.x, got ${openapi.openapi}`);
}
const requiredPaths = [
  "/v1/models",
  "/v1/chat/completions",
  "/v1/messages",
  "/v1/messages/count_tokens",
  "/v1/responses",
  "/api/public/models",
];
for (const p of requiredPaths) {
  if (!openapi.paths?.[p]) {
    throw new Error(`Missing required OpenAPI path: ${p}`);
  }
}
console.log(`openapi.json OK (${Object.keys(openapi.paths).length} paths)`);

const collection = JSON.parse(fs.readFileSync("postman/hostlinku-api.postman_collection.json", "utf8"));
if (!String(collection.info?.schema || "").includes("v2.1.0")) {
  throw new Error(`Expected Postman v2.1.0 schema, got ${collection.info?.schema}`);
}
if (!Array.isArray(collection.item) || collection.item.length < 6) {
  throw new Error(`Expected at least 6 requests in Postman collection, got ${collection.item?.length}`);
}
console.log(`Postman collection OK (${collection.item.length} requests)`);
