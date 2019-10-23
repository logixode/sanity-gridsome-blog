export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5db043825b131bb748223ce9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4gmhb4eo',
                  apiId: '92454e70-c6a5-469c-b18b-11b0d4aae8bc'
                },
                {
                  buildHookId: '5db04383e95cf9a1cf6b0f21',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-jwg1tnpz',
                  apiId: 'f1277823-5a53-4862-95ec-029f184b9335'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/logixode/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-jwg1tnpz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
