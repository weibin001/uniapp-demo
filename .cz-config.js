'use strict'
module.exports = {
  types: [
    { value: ':bug:', name: '🐛修复:    修复Bug' },
    { value: ':poop:', name: '💩优化:    优化代码' },
    { value: ':sparkles:', name: '✨特性:    添加新的特性' },
    { value: ':construction:', name: '🚧进行中:    工作进行中' },
    { value: ':white_check_mark:', name: '✅测试:    添加测试' },
    { value: ':ambulance:', name: '🚑补丁:    修改依赖(patch)' },
    { value: ':memo:', name: '📝文档:    变更的只有文档' },
    { value: ':lipstick:', name: '💄样式:    UI样式增加,修改' },
    { value: ':art:', name: '🎨格式:    空格, 分号等格式修复' },
    { value: ':rewind:', name: '⏪还原:    代码回退' },
    { value: ':zap:', name: '⚡性能:    提升性能' },
    { value: ':arrow_up:', name: '⬆️依赖:    升级依赖' },
    { value: ':arrow_down:', name: '⬇️依赖:    降级依赖' },
    { value: ':tada:', name: '🎉初始化:    初次提交' },
    {
      value: ':recycle:',
      name: '♻️重构:    代码重构，注意和特性、修复区分开'
    },
    {
      value: ':wrench:',
      name: '🔧工具:    开发工具变动(构建、脚手架工具等)'
    }
  ],
  scopes: [
    // { name: '模块1' },
    // { name: '模块2' },
    // { name: '模块3' },
    // { name: '模块4' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
}
