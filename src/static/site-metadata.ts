interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  pageTitle: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'aJIEw\'s Running Page',
  siteUrl: 'https://ajiew.github.io',
  logo: 'https://avatars1.githubusercontent.com/u/13328707?s=200&v=4',
  description: 'My Running Journey',
  pageTitle: 'Running',
  navLinks: [
    {
      name: '👋 ME',
      url: 'https://ajiew.github.io',
    },
    {
      name: '👏 SOURCE',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;
