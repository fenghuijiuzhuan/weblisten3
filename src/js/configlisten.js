require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require(['jquery', 'layui', 'menu', 'body'], function ($1, $2, menu, body) {

      var menulist = {
        list: [
          {
            text: '栏目添加',
            src: '/src/page/lanmupeizhi/configlisten.html',
            children: []
          }, {
            text: '首页栏目添加',
            src: 'javascript:;',
            children: []
          }
        ]
      }
      // menu
      menu.create($('body'), menulist)
  
      // main body
      body.create().appendTo($('body'));
    });
  })
})

