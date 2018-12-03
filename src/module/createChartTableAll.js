define(['panel'], function(panel) {
  'use strict';

  var defaultData = {
    text: '用户访问时长',
    height: 315,
    url: '/testdata/danxiangfoujue/yonghufangwenshichang.json',
    api: '',
    type: 'post',
    data: {},
    header: '',
    chartType: 'pie',
    cols: [[ //表头
      {field: 'title', title: '标题', width:""},
      {field: 'count', title: '次数', width:"20%"},
      {field: 'percent', title: '占比', width:"25%"}
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
  function Option(type) {
    var opt = {
      'bar': {
        title: {
            text: '最近2周动态、要闻更新情况',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '更新数量',
                type: 'bar',
                data: [],
                barMinHeight: 10,
                "barWidth": 30,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ],
                    itemStyle: {
                      normal: {
                        color: '#c23531'
                      }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#c23531'
                    }
                }
            }
        ]
      },
      'pie': {
        title : {
            text: '用户访问时长',
          /*  subtext: '纯属虚构',*/
            x:'left'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    // {value:12, name:'大于15(s)的访问次数'},
                    // {value:160, name:'小于15(s)的访问次数'},
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                }
            }
        ],
        color: ['#d53a35', '#334b5c','#ff5722', '#4ac444', '#333']
      }
    }
    return opt[type]
  }
  function createTable(ec, data) {
    var _data = $.extend({}, defaultData, data);
    var panelTable = {
      title: _data.title,
      body: '<div class="main-chart" style="width:60%; height:400px; display:inline-block;"></div><div class="main-table" style="width: 40%;display: inline-block;vertical-align: top;height:400px;"><table id="'+ _data.panelTable.id.slice(1) +'"></table></div>',
    };
    _data.panelTable.title ? panelTable.title = _data.panelTable.title : '';
    _data.panelTable.isTmp ? panelTable.isTmp = _data.panelTable.isTmp : '';

    panel.create(_data.content, panelTable, function(dom){
      var div = dom.find('.main-chart')
      div.height(400);
      var myChart = ec.init(div[0]);
      var option = Option(_data.chartType);

      $.get(''+_data.url, _data.data, function (edata) {
        var tabledata;
        switch(_data.chartType){
          case 'pie': !function() {
            var dlen = _data.data.isAddAllNum?edata.data.length:edata.data.length-1;
            var arr = [];
            for(var i = 0, _i=dlen;i<_i;i++){
              var arri = {}
              arri['value'] = edata.data[i].count
              arri['name'] = edata.data[i].title
              arr.push(arri)
            }
            var _option = {
              title: {
                text: _data.text,
              },
              tooltip : {
                trigger: 'item',
                formatter: function (da) {
                  return ""+da[0]+" <br/>"+da[1]+" "+da[2]+" ("+edata.data[da.dataIndex]['percent']+")";
                }
              },
              series: [
                {
                  name: edata.toolName || _data.toolName,
                  data: arr,
                }
              ]
            }
            myChart.setOption($.extend(true, {}, option, _option));
            tabledata = edata;
          }();break;
          case 'bar': !function () {
            var cname = JSON.parse(edata.cname);
            var cnum = JSON.parse(edata.cnum);
            var alnum = Math.num(cnum)
            var _option = {
              title: {
                text: _data.text,
              },
              xAxis: [
                {
                    data: cname
                }
              ],
              series: [
                {
                    data: cnum
                }
              ]
            }
            myChart.setOption($.extend(true, {}, option, _option));
            tabledata = [];
            for(var i = 0;i<cname.length;i++){
              var o = {}
              o['content'] = cname[i]
              o['counts'] = cnum[i]
              o['percent'] = (cnum[i]/alnum*100).toFixed(2);
              tabledata.push(o)
            }
          }();break;
        }
        
        layui.use('table', function(){
          // console.log(tabledata)
          var table = layui.table;
          //第一个实例
          table.render({
            elem: _data.panelTable.id,
            data: edata.data,
            page: _data.page,
            cols: _data.cols,
            parseData: _data.parseData,
            request: _data.request,
            done: function () {
              _data.done()
            }
          });
        });
      }, 'json')

    })

  }

  return createTable
});