# 臨床工学国家試験サイト — メンテナンスモード

Cloudflare Pagesに統一メンテナンスページを追加します。サイトキー `ce`。

Cloudflare Pages本番/Previewへ、他サイトと同じWorkers KV Namespaceを `DPI_MAINTENANCE_KV` としてBindingします。既存の `CE_PROGRESS` など認証・データ用Binding、Secretを保持してください。Bindingが未設定の場合、画面は通常どおり公開されます。

- 一括キー: `maintenance:global` → `{"enabled":true}` または `{"enabled":false}`
- 個別キー: `maintenance:site:ce` → `{"enabled":true}` または `{"enabled":false}`

全ての公開HTML、CSS、JS等がFunctionsを通り、ON時にHTTP 503となります。 `/api` と `/api/*` は従来のままです。OFF状態で導入し、公開画面・問題JSON/画像・進捗保存APIを検証後に切り替えてください。

**警告:** `wrangler.pages.toml` の `name = "me2-json-quiz"` が `me2-quiz-app` と重複しています。この値を利用してCEをデプロイするとME2の公開先を上書きするおそれがあります。Cloudflare Pages DashboardでCEプロジェクトの実際の名前を確認するまで手動デプロイしないでください。本PRは意図的にデプロイ先設定を変更しません。

Functionsの処理件数・KV利用料、キャッシュ・プレビューURLの別対応に注意してください。配信系統/AWSは変更しません。
