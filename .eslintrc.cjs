module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'consistent-return': 'error', // 모든 함수에서 일관된 방식으로 값을 반환하도록 강제. 코드의 일관성을 유지, 예기치 않은 동작 방지.
    eqeqeq: ['error', 'always'], // 엄격한 동등성 비교 (===와 !==)만을 허용. 암묵적인 타입 강제 변환으로 인한 오류 방지
    'prefer-const': 'error', // 변경되지 않는 변수를 let 대신 const로 선언하도록 강제
    // 사용되지 않는 변수를 방지하여 코드가 불필요하게 복잡해지는 것을 막습니다.
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-console': 'warn',
    'no-implicit-globals': 'error', // 전역 변수를 암묵적으로 선언하지 않도록 방지. 코드의 의도를 명확히 하고 전역 스코프의 오염을 줄임.
    'no-shadow': 'error', // 상위 스코프에 있는 변수와 같은 이름의 변수를 하위 스코프에서 재선언 방지. 이는 혼란을 방지하고 코드 가독성을 높임.
    // 코드에서 ‘매직 넘버’를 방지하고, 의미 있는 변수나 상수로 치환하도록 권장
    'no-magic-numbers': ['warn', { ignore: [0, 1], ignoreArrayIndexes: true }],
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // node.js내의 모듈
          'external', // 외부 패키지 및 라이브러리
          'internal', // 프로젝트 내부의 모듈
          ['parent', 'sibling'], // 부모(상위) 디렉토리의 모듈, 동일한 디렉토리의 모듈
          'index', // 현재 디렉토리의 index 파일
          'object', // console.log와 같이 내장 객체 import(typescript에서만 사용 가능)
          'type', // type 파일 (typescript에서만 사용 가능)
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@storybook/*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/**/*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './**/*.styles',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './**.css',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
    ],
  },
};
