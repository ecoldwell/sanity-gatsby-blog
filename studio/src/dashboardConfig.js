export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f59032622153d52d5879224',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-69prmqck',
                  apiId: 'f905de6a-80a0-4c2a-ad68-05ec9d9c484f'
                },
                {
                  buildHookId: '5f5903267921e54f8c68a03f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oyih2qog',
                  apiId: 'e000ac22-0299-4375-9fa8-bfe33f900609'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ecoldwell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oyih2qog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
