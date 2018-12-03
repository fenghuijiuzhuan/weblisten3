define(['util/globparam', 'util/nowmodel', 'header'], function(globparam, a, header) {
  'use strict';
  function WPING(hash){
    this.router = this.page;
    // this.chuand(hash)
    // return this;
  }
  window.menagger = true;

  WPING.prototype = {
    page: {
      index: function () {
        this.clear('menu')
        this.clear('footer')
        require(['header', 'index'], function (header, index) {
          index()
        })
      },
      kaohe: function () {
        this.clear('menu')
        require(['menu', 'footer'], function (menu, footer) {          
          // menu
          menu.create($('body'))
          // footer
          if(!NowMOD.get('footer')){
            var footer1 = '版权所有：河南省人民政府办公厅',
              footer2 = '技术支持：睿软科技';
            footer.create($('body'), footer1, footer2)
          }
          // main body
          // var bod = body.create().appendTo($('body'));
          // console.log(bod)
          // bod = bod.eq(1).append('<iframe width="100%" height="100%" style="display: block;border: 0" id="wping-body-iframe" src=""></iframe>')
        });
      }, 
      peiz: function () {
        this.clear('menu')
        require(['menu', 'footer'], function (menu, footer) {
          // menu
          var menulist = {
            list: [
              {
                text: '栏目配置',
                src: 'javascript:;',
                children: [
                  {
                    text: '栏目更新配置',
                    src: '/src/page/lanmupeizhi/configlisten.1.html',
                    children: []
                  }
                ]
              }
            ]
          };
          menu.create($('body'), menulist)
          // footer
          if(!NowMOD.get('footer')){
            var footer1 = '版权所有：河南省人民政府办公厅',
              footer2 = '技术支持：睿软科技';
            footer.create($('body'), footer1, footer2)
          }
        })
      },
      sysset: function () {
        this.clear('menu')
        require(['menu', 'footer'], function (menu, footer) {          
          // menu
          var menulist = {
            list: [
              {
                text: '机构用户',
                src: 'javascript:;',
                children: [
                  {
                    text: '用户管理',
                    src: 'javascript:;',
                    children: []
                  },
                  {
                    text: '机构管理',
                    src: 'javascript:;',
                    children: []
                  },
                  {
                    text: '区域管理',
                    src: 'javascript:;',
                    children: []
                  },
                ]
              }, {
                text: '系统设置',
                src: 'javascript:;',
                children: [
                  {
                    text: '菜单管理',
                    src: 'javascript:;',
                    children: []
                  },
                  {
                    text: '角色管理',
                    src: 'javascript:;',
                    children: []
                  },
                  {
                    text: '字典管理',
                    src: 'javascript:;',
                    children: []
                  },
                ]
              }, {
                text: '日志查询',
                src: 'javascript:;',
                children: [
                  {
                    text: '日志查询',
                    src: 'javascript:;',
                    children: []
                  },
                  {
                    text: '连接池监视',
                    src: 'javascript:;',
                    children: []
                  }
                ]
              },
            ]
          };
          menu.create($('body'), menulist)
          // footer
          var footer1 = '版权所有：河南省人民政府办公厅',
              footer2 = '技术支持：睿软科技';
          footer.create($('body'), footer1, footer2)
          // main body
          // var bod = body.appendTo($('body'));
          // bod = bod.eq(1).append('<iframe width="100%" height="100%" style="display: block;border: 0" id="wping-body-iframe" src=""></iframe>')
        });
      },
      clear: function (name) {
        var dom = NowMOD.get(name)
        dom && dom.remove()
        NowMOD.sub(name)
      }
    },
  }
  WPING.prototype.chuand = function (page) {
    
    if(globparam(page)){
      // console.log(this)
      this.page.clear('body')
      // console.log(NowMOD.get('header'))

      if(!NowMOD.get('header')){
        // console.log(1)
        header.create($('body'), {router: page})
      }
      this.router[page] && this.router[page]()
    }
    // return;
  }
  if(!NowMOD.get('router')){
    var router = new WPING()
    NowMOD.add('router', router)
  }
  return WPING
  
});