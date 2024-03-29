import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'AIFun',
    title: 'AIFun_title',
    // 配置导航栏上的站点 LOGO，如果需要配置为本地图片文件，可将图片资源放入 public 文件夹，例如放置 public/logo.png，则配置 /logo.png 即可。
    logo: '/logo.png',
    footer: 'Copyright © 2023 | Powered by <a href="#">AIFun<a/>',
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
      weibo: 'https://xxxx',
      twitter: 'https://xxxx',
      gitlab: 'https://xxxx',
      facebook: 'https://xxxx',
      zhihu: 'https://xxxx',
      yuque: 'https://xxxx',
      linkedin: 'https://xxxx',
    },
    base: '/aifun-doc/',
    publicPath: '/aifun-doc/',
    metas: [
      { name: 'keywords', content: 'dumi, base on dumi' },
      { name: 'description', content: 'React framework.' },
    ],
  },
});
