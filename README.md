# Hostlinku OpenAPI & Postman Collection

[![CI](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml/badge.svg)](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**English** | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

OpenAPI 3.1 specification and Postman Collection v2.1.0 for the [Hostlinku](https://hostlinku.com) AI Gateway (`https://api.hostlinku.com`).

## Endpoints covered

| Method & Path | Protocol / Purpose | Auth |
|---|---|---|
| `GET /api/public/models` | Public model catalog & live USD pricing | None |
| `GET /v1/models` | Authorized model slugs for your API key | Bearer / `x-api-key` |
| `POST /v1/chat/completions` | OpenAI Chat Completions (+ SSE streaming) | Bearer |
| `POST /v1/messages` | Anthropic Messages (+ prompt caching & SSE) | `x-api-key` / Bearer |
| `POST /v1/messages/count_tokens` | Free input token counter | `x-api-key` / Bearer |
| `POST /v1/responses` | OpenAI Responses API (stateless) | Bearer |

## Import into your API client

- **Postman:** Import [`postman/hostlinku-api.postman_collection.json`](postman/hostlinku-api.postman_collection.json), open **Variables**, and set `apiKey` to your `sk-...` key from the [Console](https://console.hostlinku.com).
- **Bruno / Insomnia / Hoppscotch / Scalar / Swagger:** Import [`openapi.json`](openapi.json) directly and set Bearer or `x-api-key` authentication.

## Validate locally

```bash
node scripts/validate-specs.mjs
```

## Links

- API Reference Docs: <https://docs.hostlinku.com/en/api-reference>
- Code Examples: <https://github.com/dyocodes/hostlinku-api-examples>
- Console: <https://console.hostlinku.com>

## License

[MIT](LICENSE). Specifications contain placeholder credentials only.
