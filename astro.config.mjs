import { defineConfig } from 'astro/config';

export default defineConfig({
  build: { inlineStylesheets: 'never', cssCodeSplit: true }, // 必ず別のCSSファイルとして出力する
  output: 'static',
});
