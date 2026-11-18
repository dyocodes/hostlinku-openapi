# Hostlinku OpenAPI 仕様・Postman コレクション

[![CI](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml/badge.svg)](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[English](README.md) | [Bahasa Indonesia](README.id.md) | **日本語** | [简体中文](README.zh-CN.md)

[Hostlinku](https://hostlinku.com) AI ゲートウェイ（`https://api.hostlinku.com`）向けの OpenAPI 3.1 仕様書と Postman Collection v2.1.0 です。

## 収録エンドポイント

| メソッド & パス | プロトコル / 用途 | 認証 |
|---|---|---|
| `GET /api/public/models` | 公開モデルカタログとライブ USD 料金 | 不要 |
| `GET /v1/models` | お使いの API キーで利用可能なモデル一覧 | Bearer / `x-api-key` |
| `POST /v1/chat/completions` | OpenAI Chat Completions（SSE ストリーミング対応） | Bearer |
| `POST /v1/messages` | Anthropic Messages（プロンプトキャッシュ・SSE 対応） | `x-api-key` / Bearer |
| `POST /v1/messages/count_tokens` | 残高を消費しない入力トークン計算 | `x-api-key` / Bearer |
| `POST /v1/responses` | OpenAI Responses API（ステートレス） | Bearer |

## API クライアントへのインポート

- **Postman:** [`postman/hostlinku-api.postman_collection.json`](postman/hostlinku-api.postman_collection.json) をインポートし、**Variables** タブで `apiKey` に [Console](https://console.hostlinku.com) で作成した `sk-...` キーを設定します。
- **Bruno / Insomnia / Hoppscotch / Scalar / Swagger:** [`openapi.json`](openapi.json) を直接読み込み、Bearer または `x-api-key` 認証を設定してください。

## ローカル検証

```bash
node scripts/validate-specs.mjs
```

## リンク

- API リファレンス: <https://docs.hostlinku.com/ja/api-reference>
- コードサンプル集: <https://github.com/dyocodes/hostlinku-api-examples>
- Console: <https://console.hostlinku.com>

## ライセンス

[MIT](LICENSE)。仕様にはプレースホルダーのみを含みます。
