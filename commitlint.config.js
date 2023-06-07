module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum':[ 2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}