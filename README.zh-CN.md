# Hostlinku OpenAPI 规范与 Postman 集合

[![CI](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml/badge.svg)](https://github.com/dyocodes/hostlinku-openapi/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[English](README.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md) | **简体中文**

适用于 [Hostlinku](https://hostlinku.com) AI 网关（`https://api.hostlinku.com`）的 OpenAPI 3.1 规范与 Postman Collection v2.1.0。

## 收录的接口端点

| 方法与路径 | 协议 / 用途 | 鉴权方式 |
|---|---|---|
| `GET /api/public/models` | 公开模型目录与实时 USD 定价 | 无需鉴权 |
| `GET /v1/models` | 当前 API Key 可调用的模型 slug 列表 | Bearer / `x-api-key` |
| `POST /v1/chat/completions` | OpenAI Chat Completions（支持 SSE 流式） | Bearer |
| `POST /v1/messages` | Anthropic Messages（支持 Prompt Cache 与 SSE） | `x-api-key` / Bearer |
| `POST /v1/messages/count_tokens` | 免费输入 token 计数 | `x-api-key` / Bearer |
| `POST /v1/responses` | OpenAI Responses API（无状态） | Bearer |

## 导入到 API 客户端

- **Postman：** 导入 [`postman/hostlinku-api.postman_collection.json`](postman/hostlinku-api.postman_collection.json)，打开 **Variables** 标签页，将 `apiKey` 替换为你在 [Console](https://console.hostlinku.com) 创建的 `sk-...` 密钥。
- **Bruno / Insomnia / Hoppscotch / Scalar / Swagger：** 直接导入 [`openapi.json`](openapi.json) 并配置 Bearer 或 `x-api-key` 认证。

## 本地校验

```bash
node scripts/validate-specs.mjs
```

## 链接

- API 参考文档：<https://docs.hostlinku.com/zh/api-reference>
- 代码示例仓库：<https://github.com/dyocodes/hostlinku-api-examples>
- Console：<https://console.hostlinku.com>

## 许可证

[MIT](LICENSE)。规范中仅包含占位符凭证。
