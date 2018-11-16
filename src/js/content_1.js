require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require(['jquery', 'layui', 'menu', 'body'], function ($1, $2, menu, body) {
      // menu
      menu.create($('body'))
  
      // main body
      body.create().appendTo($('body'));
    });
  })
})

