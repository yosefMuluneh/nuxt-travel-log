import antfu from '@antfu/eslint-config';

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    type: 'app',
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
    },
    rules: {
      'perfectionist/sort-imports': ['error', {
        tsconfigRootDir: '.',
      }],
      'node/no-process-env': ['error'],
      'unicorn/filename-case': ['error', {
        cases: {
          kebabCase: true,
          snakeCase: true,
          camelCase: true,
        },
        ignore: ['README.md'],
      }],
    },
  }),
);
