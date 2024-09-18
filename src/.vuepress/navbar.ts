import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: 'Home',
    icon: 'iconfont icon-home',
    link: '/',
  },
  { text: 'Team', children:[
      { text: 'Attributions', link: '/attributions' },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'Heritage', link: '/heritage' },
      { text: 'Members', link: '/team' },
    ],
    icon: 'iconfont icon-team',
  },
  {
    text: 'Project',children:[
      { text: 'Contribution', link: '/contribution' },
      { text: 'Description', link: '/description' },
      { text: 'Design', link: '/design' },
      { text: 'Engineering', link: '/engineering' },
      { text: 'Experiments', link: '/experiments' },
      { text: 'Hardware', link: '/hardware' },
      { text: 'Implementation', link: '/implementation' },
      { text: 'Measurement', link: '/measurement' },
      { text: 'Model', link: '/model' },
      { text: 'Notebook', link: '/notebook' },
      { text: 'Software', link: '/software' },
      { text: 'Results', link: '/results' },
    ],
    icon: 'iconfont icon-project',
  },
  {
    text: 'Parts',children:[
      { text: 'Improved Parts', link: '/improve' },
      { text: 'Part Collection', link: '/part-collection' },
      { text: 'Registry', link: 'https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2024&group=Fudan' },
    ],
    icon: 'iconfont icon-experiment',
  },
  {
    text: 'Safety',
    icon: 'iconfont icon-safetycertificate',
    link: '/safety',
  },
  {
    text: 'Human Practices',children:[
      { text: 'Education', link: '/education' },
      { text: 'Inclusivity', link: '/inclusivity' },
      { text: 'Integrated HP', link: '/human-practices' },
      { text: 'Promotion Video', link: '/promotion-video' },
      { text: 'Sustainable', link: '/sustainable' },
      { text: 'Entrepreneurship',link: '/entrepreneurship',},
    ],
    icon: 'iconfont icon-smile',
  },

],);
