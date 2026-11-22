# Astro Multi-page HTML Mock

Astroのレイアウトを使って、複数ページのHTMLモックをビルドします。

## 開発

```bash
npm run dev
```

デフォルトでは `http://localhost:4321/` と `http://localhost:4321/about/` をブラウザで確認できます。

## ビルド

```bash
npm run build
```

生成物は `dist/` に出力されます。

```text
dist/
├── index.html
├── about/index.html
└── styles.css
```

## ファイル構成

- `src/layouts/`: ページ共通レイアウト
- `src/pages/`: ページ固有の本文
- `public/`: CSSや画像などの静的ファイル
- `astro.config.mjs`: Astroの静的ビルド設定