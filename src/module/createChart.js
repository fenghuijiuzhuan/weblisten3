define(['panel'], function(panel) {
  'use strict';

  var defaultData = {
    text: '最近2周动态、要闻更新情况',
    height: 400,
    url: '',
    data: {},
    nameData: ['部门动态','基层动态','今日头条','今日达拉','各镇各部门最新公开','旗政府最新公开信息'],
    countData: [9,8,7,9,0,0],
    urlData: []
  }
  function createTable(ec,data) {
    var _data = $.extend({}, defaultData, data);
    var panelTable = {
      body: '<div class="main-chart"></div>',
    };
    panel.create(_data.content, panelTable, function(dom){
      var div = dom.find('.main-chart')
      div.height(400);
      var myChart = ec.init(div[0]);
      var option = {
        title: {
            text: _data.text,
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
                data: _data.nameData
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
                data: _data.countData,
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
    };
      if(_data.url){
        $.post(_data.url, _data.data, function (edata) {
          var _option = {
            title: {
              text: _data.text,
            },
            xAxis: [
              {
                  data: _data.nameData
              }
            ],
            series: [
              {
                  data: _data.countData,
              }
            ]
          }
          myChart.setOption($.extend(true, {}, option, _option));
        }, 'json')
      }else{
        myChart.setOption(option);
      }
      
    })
    
  }

  return createTable
});