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

## React / TSXコンポーネント

`@astrojs/react` を設定済みのため、`src/components/` に `.tsx` コンポーネントを作成してAstroページから利用できます。

```astro
---
import TourCard from '../components/TourCard';
---

<TourCard title="京都散策ツアー" price={9800} client:load />
```

`client:load` を付けると、ページ読み込み時にReactがブラウザー上で動作し、クリックなどのインタラクションが有効になります。付けない場合はサーバーでHTMLとして描画され、クライアント側のJavaScriptは実行されません。

## ファイル構成

- `src/layouts/`: ページ共通レイアウト
- `src/pages/`: ページ固有の本文
- `src/components/`: AstroおよびReact/TSXコンポーネント
- `public/`: CSSや画像などの静的ファイル
- `astro.config.mjs`: Astroの静的ビルド設定