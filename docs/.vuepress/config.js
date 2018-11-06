module.exports = {
  base: '/galaxy/',
  title: 'galaxy',
  description: 'react native demo',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    repo: 'youngjuning/galaxy',
    repoLabel: 'GitHub',
    docsRepo: 'youngjuning/galaxy',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: [
      { text: '配置', link: '/' },
      { text: '数据持久化', link: '/data-persistence/' },
      { text: 'Mobx', link: '/Mobx/' }
      { text: '热更新', link: '/hot-update/' }
    ], // 导航栏
    sidebar: 'auto', // 自动生成侧栏
    lastUpdated: 'Last Updated', // 最后更新时间
  },
  markdown: {
    lineNumbers: true
  }
}
