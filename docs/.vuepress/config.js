module.exports = {
  base: '/yangjunning/',
  title: 'yangjunning',
  description: 'react native demo',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    repo: 'youngjuning/yangjunning',
    repoLabel: 'GitHub',
    docsRepo: 'youngjuning/yangjunning',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: [
      { text: '配置', link: '/' },
      { text: '数据持久化', link: '/data-persistence/' },
      {
        text: '状态管理',
        items: [
          { text: 'Mobx', link: '/state-management/mobx.html' },
        ]
      },
    ], // 导航栏
    sidebar: 'auto', // 自动生成侧栏
    lastUpdated: 'Last Updated', // 最后更新时间
  },
  markdown: {
    lineNumbers: true
  }
}