exports.keys = '123456';

// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://api.apiopen.top/getJoke',
}

exports.robot = {
  ua: [/Baiduspider/i]
}

exports.middleware = ['robot']

