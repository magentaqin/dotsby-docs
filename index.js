const config = {
  title: 'Test Api Doc',
  version: '0.1.0',
  document_id: '99d7f64cd944f5dcc277ef1f0a16ea4b6c862149',
  raml_file: 'api.raml',
  sections: [
    {
      title: 'Overview',
      dir: 'overview',
      pages: [
        { title: 'Introduction', file: 'introduction.md' },
        { title: 'FAQ', file: 'faq.md' },
      ],
    },
    {
      title: 'User',
      apis: [
        { method: 'post', request_uri: '/user/signup' },
        { method: 'post', request_uri: '/user/login' },
        { method: 'post', request_uri: '/user/logout' },
        { method: 'get', request_uri: '/user/info' },
      ],
    },
    {
      title: 'Document',
      apis: [
        { method: 'post', request_uri: '/document/create' },
        { method: 'get', request_uri: '/document/list' },
        { method: 'post', request_uri: '/document/publish' },
        { method: 'get', request_uri: '/document' },
      ],
    },
    {
      title: 'Page',
      apis: [
        { method: 'get', request_uri: '/page' },
      ],
    },
    {
      title: 'query',
      apis: [
        { method: 'get', request_uri: '/query' },
      ],
    },
  ],
};

module.exports = config;