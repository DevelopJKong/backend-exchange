module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': {
      'no-empty-function': 'warn', // 중괄호가 빈 함수 허용
      '@typescript-eslint/no-empty-function': 'warn', // 중괄호가 빈 함수 허용
      'react/prop-types': 'off', // prop-types 사용하지 않음
      'react/react-in-jsx-scope': 'off', // React를 import하지 않아도 사용 가능
      camelcase: 'warn', // camelcase 사용하지 않음
      'spaced-comment': 'warn', // 주석 앞에 공백을 넣지 않음
      quotes: ['error', 'single', { allowTemplateLiterals: true }], // 따옴표 사용
      'no-duplicate-imports': 'error', // 중복 import 에러로 잡음
    },
  },
};
