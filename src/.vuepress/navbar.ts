import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: 'Home',
    icon: 'iconfont icon-home',
    link: '/',
  },
  { text: 'Team', children:[
      { text: 'Members', link: '/team' },
      { text: 'Attributions', link: '/attributions' },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'Heritage', link: '/heritage' },
    ],
    icon: 'iconfont icon-team',
  },
  {
    text: 'Project',children:[
      { text: 'Contribution', link: '/contribution' },
      { text: 'Description', link: '/description' },
      { text: 'Engineering', link: '/engineering' },
      { text: 'Experiments', link: '/experiments' },
      { text: 'Implementation', link: '/implementation' },
      { text: 'Measurement', link: '/measurement' },
      { text: 'Model', link: '/model' },
      { text: 'Notebook', link: '/notebook' },
      { text: 'Results', link: '/results' },
    ],
    icon: 'iconfont icon-project',
  },
  {
    text: 'Parts',children:[
      { text: 'Improved Parts', link: '/improve' },
      { text: 'Part Collection', link: '/part-collection' },
      { text: 'Registry', link: 'http://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2023&group=Fudan' },
    ],
    icon: 'iconfont icon-experiment',
  },
  {
    text: 'Software',
    icon: 'iconfont icon-code',
    link: '/software',
  },
  {
    text: 'Safety',
    icon: 'iconfont icon-safetycertificate',
    link: '/safety',
  },
  {
    text: 'Human Practices',children:[
      { text: 'Integrated', link: '/human-practices' },
      { text: 'Education', link: '/education' },
      { text: 'Inclusivity', link: '/inclusivity' },
      { text: 'Promotion Video', link: '/promotion-video' },
      { text: 'Sustainable', link: '/sustainable' },
    ],
    icon: 'iconfont icon-smile',
  },
],);
