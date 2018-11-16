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
      { text: 'Get Start', link: '/' },
      {
        text: '原生',
        items: [
          {text:'Android', link: '/Native/Android.html'},
          {text:'iOS', link: '/Native/iOS.html'},
          {text:'脚手架', link: '/Native/脚手架.html'},
        ]
      },
      {
        text: '数据持久化',
        items: [
          {text:'react-native-localstorage', link: '/data-persistence/react-native-localstorage.html'},
        ]
      },
      {
        text: '热更新',
        items: [
          {text:'code-push','link': '/hot-update/code-push.html'},
          {text:'react-native-update','link': '/hot-update/react-native-update.html'},
          {text:'code-push-server','link': '/hot-update/code-push-server.html'},
        ]
      },
      {
        text: '更多',
        items: [
          {text:'axios', link: '/more-lib/axios.html'},
          {text: 'mobx', link: '/more-lib/mobx.html'},
        ]
      }
    ], // 导航栏
    sidebar: 'auto', // 自动生成侧栏
    lastUpdated: 'Last Updated', // 最后更新时间
  },
  markdown: {
    lineNumbers: true
  }
}
