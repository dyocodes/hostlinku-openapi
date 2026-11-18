# Koleksi OpenAPI & Postman Hostlinku

[![CI](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml/badge.svg)](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[English](README.md) | **Bahasa Indonesia** | [日本語](README.ja.md) | [简体中文](README.zh-CN.md)

Spesifikasi OpenAPI 3.1 dan Koleksi Postman v2.1.0 untuk Gateway AI [Hostlinku](https://hostlinku.com) (`https://api.hostlinku.com`).

## Endpoint yang tercakup

| Method & Path | Protokol / Kegunaan | Autentikasi |
|---|---|---|
| `GET /api/public/models` | Katalog model publik & harga USD live | Tanpa auth |
| `GET /v1/models` | Daftar slug model aktif untuk API key Anda | Bearer / `x-api-key` |
| `POST /v1/chat/completions` | OpenAI Chat Completions (+ streaming SSE) | Bearer |
| `POST /v1/messages` | Anthropic Messages (+ prompt caching & SSE) | `x-api-key` / Bearer |
| `POST /v1/messages/count_tokens` | Hitung token input tanpa memotong saldo | `x-api-key` / Bearer |
| `POST /v1/responses` | OpenAI Responses API (stateless) | Bearer |

## Impor ke klien API

- **Postman:** Impor [`postman/hostlinku-api.postman_collection.json`](postman/hostlinku-api.postman_collection.json), buka tab **Variables**, lalu isi `apiKey` dengan key `sk-...` Anda dari [Console](https://console.hostlinku.com).
- **Bruno / Insomnia / Hoppscotch / Scalar / Swagger:** Impor [`openapi.json`](openapi.json) langsung dan atur Bearer atau `x-api-key`.

## Validasi lokal

```bash
node scripts/validate-specs.mjs
```

## Tautan

- Referensi API Lengkap: <https://docs.hostlinku.com/api-reference>
- Contoh Kode: <https://github.com/dyocodes/hostlinku-api-examples>
- Console: <https://console.hostlinku.com>

## Lisensi

[MIT](LICENSE). Spesifikasi hanya menggunakan placeholder kredensial.
