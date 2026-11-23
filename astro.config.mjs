import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  build: { inlineStylesheets: 'never', cssCodeSplit: true, format: 'file' }, // 必ず別のCSSファイルとして出力する
  output: 'static',
});
