import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: 'Project', children:[
      { text: 'Contribution', link: '/contribution' },
      { text: 'Description', link: '/description' },
      { text: 'Design', link: '/design' },
      { text: 'Engineering', link: '/engineering' },
      { text: 'Implementation', link: '/implementation' },
      { text: 'Notebook', link: '/notebook' },
      { text: 'Results', link: '/results' },
    ],
    icon: 'iconfont icon-project',
  },
  {
    text: 'Technology', children:[
      { text: 'Experiments', link: '/experiments' },
      { text: 'Measurement', link: '/measurement' },
      { text: 'Improved Parts', link: '/improve' },
      { text: 'Part Collection', link: '/part-collection' },
      { text: 'Parts List', link: 'https://parts.igem.org/partsdb/search_1000.cgi?q=K5115000' },
      { text: 'Safety', link: '/safety' },
      { text: 'Software', link: '/software' },
      { text: 'Hardware', link: '/hardware' },
    ],
    icon: 'iconfont icon-experiment',
  },
  {
    text: 'Community', children:[
      { text: 'Education', link: '/education' },
      { text: 'Entrepreneurship', link: '/entrepreneurship' },
      { text: 'Inclusivity', link: '/inclusivity' },
      { text: 'Integrated HP', link: '/human-practices' },
      { text: 'Presentation', link: '/pv' },
      { text: 'Promotion Video', link: '/promotion-video' },
      { text: 'Sustainable', link: '/sustainable' },
      { text: 'Wiki @gitlab', link: 'https://gitlab.igem.org/2024/fudan/-/blob/main/README.md' },
    ],
    icon: 'iconfont icon-smile',
  },
  { text: 'Team', children:[
      { text: 'Attributions', link: '/attributions' },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'Heritage', link: '/heritage' },
      { text: 'Members', link: '/team' },
    ],
    icon: 'iconfont icon-team'
  }
]);
