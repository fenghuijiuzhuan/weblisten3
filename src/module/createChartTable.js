define(['panel'], function(panel) {
  'use strict';

  var defaultData = {
    height: 315,
    url: '/testdata/danxiangfoujue/shouyegengxin.json',
    type: 'post',
    where: '',
    header: '',
    cols: [[ //表头
      {field: 'id', title: '序号', width:"10%", sort: true,},
      {field: 'time', title: '更新时间',width:"20%"},
      {field: 'kind', title: '所属栏目', width:"20%",},
      {field: 'title', title: '标题',width:""}
    ]],
    // parseData: function(res){
    //   return {
    //     "code": 0,
    //     "count": res.count,
    //     "data": res.list
    //   };
    // },
    // request: {
    //   "pageName": 'pageNo',
    //   "limitName": 'pageSize'
    // },
    done: function (obj) {}
  }
  function createTable(data) {
    var _data = $.extend({}, defaultData, data);
    // console.log(data)
    var panelTable = {
      title: _data.title,
      body: '<div class="main-table"><table id="'+ _data.panelTable.id.slice(1) +'"></table></div>',
    };
    _data.panelTable.title ? panelTable.title = _data.panelTable.title : '';
    _data.panelTable.isTmp ? panelTable.isTmp = _data.panelTable.isTmp : '';

    panel.create(_data.content, panelTable, function(dom){
      layui.use('table', function(){
        var table = layui.table;
        //第一个实例
        table.render({
          elem: _data.panelTable.id,
          height: _data.height,
          url: _data.url, //数据接口
          // method: _data.type,
          page: _data.page, //开启分页
          cols: _data.cols,
          parseData: _data.parseData,
          request: _data.request,
          done: function () {
            _data.done()
          }
        });
      });
    })

  }

  return createTable
});