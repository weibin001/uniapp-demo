module.exports = {
  extends: ['cz', './node_modules/commitlint-config-gitmoji'],
  rules: {
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        ':bug:',
        ':poop:',
        ':sparkles:',
        ':construction:',
        ':white_check_mark:',
        ':ambulance:',
        ':memo:',
        ':lipstick:',
        ':art:',
        ':rewind:',
        ':zap:',
        ':arrow_up:',
        ':arrow_down:',
        ':tada:',
        ':recycle:',
        ':wrench:'
      ]
    ]
  }
}
