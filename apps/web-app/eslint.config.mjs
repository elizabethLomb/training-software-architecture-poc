import { FlatCompat } from '@eslint/eslintrc';
import pkg from '@eslint/js';
import path from 'path';

const { configs } = pkg;

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next',
      'next/core-web-vitals',
      path.resolve(import.meta.dirname, '../../eslint.config.cjs')
    ],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', '../../'],
    },
    settings: {
      next: {
        rootDir: '../../',
      },
    },
  }),
];

export default eslintConfig;