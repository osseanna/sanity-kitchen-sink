export default {
  widgets: [
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
                  buildHookId: '6348c28d95e5524400d1c4a5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-svrxdict',
                  apiId: 'cff21fb0-fb15-4f02-9123-e49107a44ab9'
                },
                {
                  buildHookId: '6348c28d56035c3daaf21352',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t534m6vt',
                  apiId: 'b865c5c9-d18c-4731-b2ba-1ec74f837470'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/osseanna/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t534m6vt.netlify.app', category: 'apps'}
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
