(

  function () {
    // var bj;
    // $.get('bj.json', function(data) {
    //   bj=data;
    // });
    require.config({
        paths: {
            echarts: './js'
        },
        packages: [
            {
                name: 'BMap',
                location: './src',
                main: 'main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
    function (echarts, BMapExtension) {
        $('#main').css({
            height:$('body').height(),
            width: $('body').width()
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x: 104.114129,
            y: 37.550339
        };

        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 5);
        map.enableScrollWheelZoom(true);
        // 地图自定义样式
        map.setMapStyle({
              'styleJson': [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#031628'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000102'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#0b3d51'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#08304b'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'geometry',
                  'stylers': {
                    'lightness': -70
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#857f7f'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.stroke',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#062032'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#465b6c'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }
              ]
            });

        option = {
          color: ['gold'],//,'aqua','lime','gold','aqua','lime','gold','aqua','lime','gold','aqua','lime'],//左上角图例颜色
            color: ['gold','aqua','lime'],//左上角图例颜色
            title : {
                text: '2017年主要城市人口迁徙地图',
                subtext:'数据来源：百度 人口迁徙数据',
                sublink:'https://www.udparty.com/index.php/detail/articledetails/?id=1221&title=%E4%BA%BA%E5%8F%A3%E8%BF%81%E5%BE%99%E6%95%B0%E6%8D%AE',
                x:'center',
                textStyle : {
                    color: '#fff'

                }
            },

            tooltip : {//鼠标移动显示文本框
                trigger: 'item',
                formatter: function (v) {
                    return v[1].replace(':', ' > ');
                }
            },

            legend: {
                orient: 'vertical',
                x:'left',
              //  data:['北京','上海', '广州'],
                data:['北京','上海', '广州','重庆','西安','成都','天津','哈尔滨','杭州','深圳','武汉','南京'],
                selectedMode: 'single',
                selected:{
                    '上海' : true,
                    '广州' : true
                },
                textStyle : {
                    color: '#fff'
                }
            },
            // toolbox: {
            //     show : true,
            //     orient : 'vertical',
            //     x: 'right',
            //     y: 'center',
            //     feature : {
            //         mark : {show: true},
            //         dataView : {show: true, readOnly: false},
            //         restore : {show: true},
            //         saveAsImage : {show: true},
            //     }
            // },
            dataRange: {
                min : 0,
                max : 50,
                range: {
                    start: 10,
                    end: 50
                },
                x: 'right',
                calculable : true,
                color: ['#ff3333','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },

            series : [
                {
                    name:'北京',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    geoCoord: {
                        '上海': [121.4648,31.2891],
                        '东莞': [113.8953,22.901],
                        '东营': [118.7073,37.5513],
                        '中山': [113.4229,22.478],
                        '临汾': [111.4783,36.1615],
                        '临沂': [118.3118,35.2936],
                        '丹东': [124.541,40.4242],
                        '丽水': [119.5642,28.1854],
                        '乌鲁木齐': [87.9236,43.5883],
                        '佛山': [112.8955,23.1097],
                        '保定': [115.0488,39.0948],
                        '兰州': [103.5901,36.3043],
                        '包头': [110.3467,41.4899],
                        '北京': [116.4551,40.2539],
                        '北海': [109.314,21.6211],
                        '南京': [118.8062,31.9208],
                        '南宁': [108.479,23.1152],
                        '南昌': [116.0046,28.6633],
                        '南通': [121.1023,32.1625],
                        '厦门': [118.1689,24.6478],
                        '台州': [121.1353,28.6688],
                        '合肥': [117.29,32.0581],
                        '呼和浩特': [111.4124,40.4901],
                        '咸阳': [108.4131,34.8706],
                        '哈尔滨': [127.9688,45.368],
                        '唐山': [118.4766,39.6826],
                        '嘉兴': [120.9155,30.6354],
                        '大同': [113.7854,39.8035],
                        '大连': [122.2229,39.4409],
                        '天津': [117.4219,39.4189],
                        '太原': [112.3352,37.9413],
                        '威海': [121.9482,37.1393],
                        '宁波': [121.5967,29.6466],
                        '宝鸡': [107.1826,34.3433],
                        '宿迁': [118.5535,33.7775],
                        '常州': [119.4543,31.5582],
                        '广州': [113.5107,23.2196],
                        '廊坊': [116.521,39.0509],
                        '延安': [109.1052,36.4252],
                        '张家口': [115.1477,40.8527],
                        '徐州': [117.5208,34.3268],
                        '德州': [116.6858,37.2107],
                        '惠州': [114.6204,23.1647],
                        '成都': [103.9526,30.7617],
                        '扬州': [119.4653,32.8162],
                        '承德': [117.5757,41.4075],
                        '拉萨': [91.1865,30.1465],
                        '无锡': [120.3442,31.5527],
                        '日照': [119.2786,35.5023],
                        '昆明': [102.9199,25.4663],
                        '杭州': [119.5313,29.8773],
                        '枣庄': [117.323,34.8926],
                        '柳州': [109.3799,24.9774],
                        '株洲': [113.5327,27.0319],
                        '武汉': [114.3896,30.6628],
                        '汕头': [117.1692,23.3405],
                        '江门': [112.6318,22.1484],
                        '沈阳': [123.1238,42.1216],
                        '沧州': [116.8286,38.2104],
                        '河源': [114.917,23.9722],
                        '泉州': [118.3228,25.1147],
                        '泰安': [117.0264,36.0516],
                        '泰州': [120.0586,32.5525],
                        '济南': [117.1582,36.8701],
                        '济宁': [116.8286,35.3375],
                        '海口': [110.3893,19.8516],
                        '淄博': [118.0371,36.6064],
                        '淮安': [118.927,33.4039],
                        '深圳': [114.5435,22.5439],
                        '清远': [112.9175,24.3292],
                        '温州': [120.498,27.8119],
                        '渭南': [109.7864,35.0299],
                        '湖州': [119.8608,30.7782],
                        '湘潭': [112.5439,27.7075],
                        '滨州': [117.8174,37.4963],
                        '潍坊': [119.0918,36.524],
                        '烟台': [120.7397,37.5128],
                        '玉溪': [101.9312,23.8898],
                        '珠海': [113.7305,22.1155],
                        '盐城': [120.2234,33.5577],
                        '盘锦': [121.9482,41.0449],
                        '石家庄': [114.4995,38.1006],
                        '福州': [119.4543,25.9222],
                        '秦皇岛': [119.2126,40.0232],
                        '绍兴': [120.564,29.7565],
                        '聊城': [115.9167,36.4032],
                        '肇庆': [112.1265,23.5822],
                        '舟山': [122.2559,30.2234],
                        '苏州': [120.6519,31.3989],
                        '莱芜': [117.6526,36.2714],
                        '菏泽': [115.6201,35.2057],
                        '营口': [122.4316,40.4297],
                        '葫芦岛': [120.1575,40.578],
                        '衡水': [115.8838,37.7161],
                        '衢州': [118.6853,28.8666],
                        '西宁': [101.4038,36.8207],
                        '西安': [109.1162,34.2004],
                        '贵阳': [106.6992,26.7682],
                        '连云港': [119.1248,34.552],
                        '邢台': [114.8071,37.2821],
                        '邯郸': [114.4775,36.535],
                        '郑州': [113.4668,34.6234],
                        '鄂尔多斯': [108.9734,39.2487],
                        '重庆': [107.7539,30.1904],
                        '金华': [120.0037,29.1028],
                        '铜川': [109.0393,35.1947],
                        '银川': [106.3586,38.1775],
                        '镇江': [119.4763,31.9702],
                        '长春': [125.8154,44.2584],
                        '长沙': [113.0823,28.2568],
                        '长治': [112.8625,36.4746],
                        '阳泉': [113.4778,38.0951],
                        '青岛': [120.4651,36.3373],
                        '韶关': [113.7964,24.7028],
                        '三亚': [109.5078,18.2340],
                        '乐山':[103.7514,29.5682],
                        '佳木斯':[130.3623,46.8136],
                        '内江':[105.0534,29.5775],
                        '南充':[106.0816,30.7958],
                        '咸宁':[114.2687,29.8943],
                        '商洛':[109.9403,33.8703],
                        '大庆':[125.0248,46.5954],
                        '孝感':[113.9113,30.9284],
                        '宜昌':[111.2852,30.7039],
                        '巴中':[106.7547,31.8490],
                        '广安':[106.6317,30.4744],
                        '德阳':[104.3915,31.1304],
                        '揭阳':[116.3497,23.5429],
                        '梅州':[116.1079,24.3145],
                        '榆林':[109.7574,38.2972],
                        '汉中':[107.0343,33.0781],
                        '汕尾':[115.3640,22.7786],
                        '湛江':[110.3992,21.1949],
                        '滁州':[118.3011,32.3165],
                        '眉山':[103.8314,30.0504],
                        '绥化':[126.9834,46.6370],
                        '绵阳':[104.7485,31.4563],
                        '肇兴':[111.4633,23.0836],
                        '茂名':[110.8888,21.6707],
                        '荆州':[112.2477,30.3173],
                        '衡阳':[112.5993,26.9005],
                        '衢州':[118.8691,28.9584],
                        '襄阳':[112.1411,32.0453],
                        '资阳':[104.6501,30.1226],
                        '赣州':[114.9336,25.8528],
                        '达州':[107.5003,31.2246],
                        '香港':[114.1094,22.3964],
                        '黄冈':[114.8649,30.4490],
                        '齐齐哈尔':[123.9592,47.3413]

                    },

                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,//function(d,i){return data[i][2].value},
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                         data : [
                            [{name:'重庆'}, {name:'北京',value:45.8}],
                            [{name:'上海'}, {name:'北京',value:44.2}],
                            [{name:'长沙'}, {name:'北京',value:36.5}],
                            [{name:'武汉'}, {name:'北京',value:31.4}],
                            [{name:'廊坊'}, {name:'北京',value:30.5}],
                            [{name:'杭州'}, {name:'北京',value:28.1}],
                            [{name:'保定'}, {name:'北京',value:23.8}],
                            [{name:'天津'}, {name:'北京',value:23.8}],
                            [{name:'哈尔滨'}, {name:'北京',value:23.4}],
                            [{name:'西安'}, {name:'北京',value:21.8}]

                        ]

                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'重庆',value:45.8},
                          {name:'上海',value:44.2}
                        ]
                    }

                },
                {
                    name:'上海',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'重庆'},{name:'上海',value:44.8}],
                            [{name:'北京'},{name:'上海',value:44.4}],
                            [{name:'深圳'},{name:'上海',value:36}],
                            [{name:'苏州'},{name:'上海',value:33.4}],
                            [{name:'广州'},{name:'上海',value:30.5}],
                            [{name:'长春'},{name:'上海',value:26.9}],
                            [{name:'西安'},{name:'上海',value:24.1}],
                            [{name:'沈阳'},{name:'上海',value:20.8}],
                            [{name:'杭州'},{name:'上海',value:19.9}],
                            [{name:'南京'},{name:'上海',value:19}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'重庆',value:44.8},
                          {name:'北京',value:44.4},
                          {name:'杭州',value:19.9},
                          {name:'南京',value:19}
                        ]
                    }
                },
                {
                    name:'广州',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'佛山'},{name:'广州',value:41.4}],
                            [{name:'上海'},{name:'广州',value:34.5}],
                            [{name:'东莞'},{name:'广州',value:30.5}],
                            [{name:'成都'},{name:'广州',value:30.4}],
                            [{name:'深圳'},{name:'广州',value:29.8}],
                            [{name:'郑州'},{name:'广州',value:23.3}],
                            [{name:'昆明'},{name:'广州',value:21.3}],
                            [{name:'武汉'},{name:'广州',value:20.8}],
                            [{name:'西安'},{name:'广州',value:20.5}],
                            [{name:'清远'},{name:'广州',value:20.2}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'佛山'},{name:'广州',value:41.4},
                        ]
                    }
                },
                {
                    name:'杭州',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'北京'},{name:'杭州',value:29.7}],
                            [{name:'重庆'},{name:'杭州',value:23.9}],
                            [{name:'贵阳'},{name:'杭州',value:21.9}],
                            [{name:'上海'},{name:'杭州',value:21.9}],
                            [{name:'南宁'},{name:'杭州',value:21.7}],
                            [{name:'嘉兴'},{name:'杭州',value:20.8}],
                            [{name:'绍兴'},{name:'杭州',value:19.8}],
                            [{name:'广州'},{name:'杭州',value:19.2}],
                            [{name:'金华'},{name:'杭州',value:16.8}],
                            [{name:'宁波'},{name:'杭州',value:16.6}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'金华',value:16.8},
                          {name:'宁波',value:16.6}
                        ]
                    }
                },
                {
                    name:'重庆',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'上海'},{name:'重庆',value:48.8}],
                            [{name:'北京'},{name:'重庆',value:44}],
                            [{name:'杭州'},{name:'重庆',value:26.3}],
                            [{name:'成都'},{name:'重庆',value:25.9}],
                            [{name:'宁波'},{name:'重庆',value:25.7}],
                            [{name:'天津'},{name:'重庆',value:25.1}],
                            [{name:'苏州'},{name:'重庆',value:23.5}],
                            [{name:'深圳'},{name:'重庆',value:21.2}],
                            [{name:'南京'},{name:'重庆',value:21.2}],
                            [{name:'拉萨'},{name:'重庆',value:20.7}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'上海',value:48.8},
                          {name:'北京',value:44}
                        ]
                    }
                },
                {
                    name:'西安',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'咸阳'},{name:'西安',value:31.9}],
                            [{name:'渭南'},{name:'西安',value:26.2}],
                            [{name:'深圳'},{name:'西安',value:24.9}],
                            [{name:'上海'},{name:'西安',value:23.5}],
                            [{name:'北京'},{name:'西安',value:21.3}],
                            [{name:'广州'},{name:'西安',value:20.6}],
                            [{name:'宝鸡'},{name:'西安',value:20}],
                            [{name:'延安'},{name:'西安',value:20}],
                            [{name:'榆林'},{name:'西安',value:19.4}],
                            [{name:'兰州'},{name:'西安',value:26.6}]

                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'榆林',value:19.4}
                        ]
                    }
                },
                {
                    name:'深圳',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'东莞'},{name:'深圳',value:39.9}],
                            [{name:'上海'},{name:'深圳',value:34.4}],
                            [{name:'成都'},{name:'深圳',value:31.6}],
                            [{name:'惠州'},{name:'深圳',value:26.4}],
                            [{name:'广州'},{name:'深圳',value:25.8}],
                            [{name:'西安'},{name:'深圳',value:22.4}],
                            [{name:'重庆'},{name:'深圳',value:21.1}],
                            [{name:'咸阳'},{name:'深圳',value:18.2}],
                            [{name:'郑州'},{name:'深圳',value:18.1}],
                            [{name:'昆明'},{name:'深圳',value:17.6}]

                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'咸阳',value:18.2},
                          {name:'郑州',value:18.1},
                          {name:'昆明',value:17.6}
                        ]
                    }
                },
                {
                    name:'成都',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'深圳'},{name:'成都',value:32.2}],
                            [{name:'广州'},{name:'成都',value:30}],
                            [{name:'重庆'},{name:'成都',value:29}],
                            [{name:'南京'},{name:'成都',value:27.9}],
                            [{name:'德阳'},{name:'成都',value:24}],
                            [{name:'南充'},{name:'成都',value:23.9}],
                            [{name:'绵阳'},{name:'成都',value:23.6}],
                            [{name:'达州'},{name:'成都',value:23}],
                            [{name:'资阳'},{name:'成都',value:22.4}],
                            [{name:'眉山'},{name:'成都',value:21.8}]

                        ]
                    }
                },
                {
                    name:'哈尔滨',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'北京'},{name:'哈尔滨',value:23.4}],
                          [{name:'天津'},{name:'哈尔滨',value:18.4}],
                          [{name:'绥化'},{name:'哈尔滨',value:17.2}],
                          [{name:'齐齐哈尔'},{name:'哈尔滨',value:15.6}],
                          [{name:'济南'},{name:'哈尔滨',value:15}],
                          [{name:'大庆'},{name:'哈尔滨',value:13.9}],
                          [{name:'青岛'},{name:'哈尔滨',value:13.8}],
                          [{name:'秦皇岛'},{name:'哈尔滨',value:13.8}],
                          [{name:'沈阳'},{name:'哈尔滨',value:13.7}],
                          [{name:'石家庄'},{name:'哈尔滨',value:13.4}]

                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [

                          {name:'北京',value:25.3},
                          {name:'天津',value:18.4},
                          {name:'绥化',value:17.2},
                          {name:'齐齐哈尔',value:15.6},
                          {name:'济南',value:15},
                          {name:'大庆',value:13.9},
                          {name:'青岛',value:13.8},
                          {name:'秦皇岛',value:13.8},
                          {name:'沈阳',value:13.7},
                          {name:'石家庄',value:13.4}
                        ]
                    }
                },
                {
                    name:'武汉',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'北京'},{name:'武汉',value:35.2}],
                            [{name:'昆明'},{name:'武汉',value:29.5}],
                            [{name:'黄冈'},{name:'武汉',value:25.4}],
                            [{name:'孝感'},{name:'武汉',value:24.5}],
                            [{name:'成都'},{name:'武汉',value:23.5}],
                            [{name:'沈阳'},{name:'武汉',value:22.6}],
                            [{name:'三亚'},{name:'武汉',value:21.9}],
                            [{name:'襄阳'},{name:'武汉',value:21.8}],
                            [{name:'广州'},{name:'武汉',value:21.5}],
                            [{name:'深圳'},{name:'武汉',value:21.4}]

                        ]
                    },
                },
                {
                    name:'南京',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {

                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'成都'},{name:'南京',value:35.3}],
                            [{name:'重庆'},{name:'南京',value:28.1}],
                            [{name:'北京'},{name:'南京',value:26}],
                            [{name:'贵阳'},{name:'南京',value:25.1}],
                            [{name:'南宁'},{name:'南京',value:22.8}],
                            [{name:'上海'},{name:'南京',value:22}],
                            [{name:'长春'},{name:'南京',value:21.7}],
                            [{name:'兰州'},{name:'南京',value:21.1}],
                            [{name:'苏州'},{name:'南京',value:20.9}],
                            [{name:'广州'},{name:'南京',value:20}]

                        ]
                    },
                },
                {
                    name:'天津',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                label:{position:'start'},
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'重庆'},{name:'天津',value:28}],
                            [{name:'北京'},{name:'天津',value:27.9}],
                            [{name:'福州'},{name:'天津',value:20.6}],
                            [{name:'哈尔滨'},{name:'天津',value:17.9}],
                            [{name:'上海'},{name:'天津',value:17.8}],
                            [{name:'长沙'},{name:'天津',value:16.7}],
                            [{name:'廊坊'},{name:'天津',value:15.7}],
                            [{name:'唐山'},{name:'天津',value:15.1}],
                            [{name:'沧州'},{name:'天津',value:14.8}],
                            [{name:'兰州'},{name:'天津',value:12.7}]

                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                          {name:'哈尔滨',value:17.9},
                          {name:'上海',value:17.8},
                          {name:'长沙',value:16.7},
                          {name:'廊坊',value:15.7},
                          {name:'唐山',value:15.1},
                          {name:'沧州',value:14.8},
                          {name:'兰州',value:12.7}
                        ]
                    }
                },
                {
                    name:'全国',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol: ['none', 'circle'],
                        symbolSize : 1,
                        itemStyle : {
                            normal: {
                                color:'#fff',
                                borderWidth:1,
                                borderColor:'rgba(30,144,255,0.5)'
                            }
                        },

                        data : [

                            [{name:'北京'},{name:'南京'}],
                            [{name:'北京'},{name:'南宁'}],
                            [{name:'北京'},{name:'南通'}],
                            [{name:'北京'},{name:'上海'}],
                            [{name:'北京'},{name:'沈阳'}],
                            [{name:'北京'},{name:'西安'}],
                            [{name:'北京'},{name:'汕头'}],
                            [{name:'北京'},{name:'深圳'}],
                            [{name:'北京'},{name:'青岛'}],
                            [{name:'北京'},{name:'济南'}],
                            [{name:'北京'},{name:'太原'}],
                            [{name:'北京'},{name:'乌鲁木齐'}],
                            [{name:'北京'},{name:'潍坊'}],
                            [{name:'北京'},{name:'威海'}],
                            [{name:'北京'},{name:'温州'}],
                            [{name:'北京'},{name:'武汉'}],
                            [{name:'北京'},{name:'无锡'}],
                            [{name:'北京'},{name:'厦门'}],
                            [{name:'北京'},{name:'西宁'}],
                            [{name:'北京'},{name:'徐州'}],
                            [{name:'北京'},{name:'烟台'}],
                            [{name:'北京'},{name:'盐城'}],
                            [{name:'北京'},{name:'珠海'}],
                            [{name:'上海'},{name:'包头'}],
                            [{name:'上海'},{name:'北海'}],
                            [{name:'上海'},{name:'广州'}],
                            [{name:'上海'},{name:'郑州'}],
                            [{name:'上海'},{name:'长春'}],
                            [{name:'上海'},{name:'重庆'}],
                            [{name:'上海'},{name:'长沙'}],
                            [{name:'上海'},{name:'成都'}],
                            [{name:'上海'},{name:'丹东'}],
                            [{name:'上海'},{name:'大连'}],
                            [{name:'上海'},{name:'福州'}],
                            [{name:'上海'},{name:'海口'}],
                            [{name:'上海'},{name:'呼和浩特'}],
                            [{name:'上海'},{name:'合肥'}],
                            [{name:'上海'},{name:'哈尔滨'}],
                            [{name:'上海'},{name:'舟山'}],
                            [{name:'上海'},{name:'银川'}],
                            [{name:'上海'},{name:'南昌'}],
                            [{name:'上海'},{name:'昆明'}],
                            [{name:'上海'},{name:'贵阳'}],
                            [{name:'上海'},{name:'兰州'}],
                            [{name:'上海'},{name:'拉萨'}],
                            [{name:'上海'},{name:'连云港'}],
                            [{name:'上海'},{name:'临沂'}],
                            [{name:'上海'},{name:'柳州'}],
                            [{name:'上海'},{name:'宁波'}],
                            [{name:'上海'},{name:'南宁'}],
                            [{name:'上海'},{name:'北京'}],
                            [{name:'上海'},{name:'沈阳'}],
                            [{name:'上海'},{name:'秦皇岛'}],
                            [{name:'上海'},{name:'西安'}],
                            [{name:'上海'},{name:'石家庄'}],
                            [{name:'上海'},{name:'汕头'}],
                            [{name:'上海'},{name:'深圳'}],
                            [{name:'上海'},{name:'青岛'}],
                            [{name:'上海'},{name:'济南'}],
                            [{name:'上海'},{name:'天津'}],
                            [{name:'上海'},{name:'太原'}],
                            [{name:'上海'},{name:'乌鲁木齐'}],
                            [{name:'上海'},{name:'潍坊'}],
                            [{name:'上海'},{name:'威海'}],
                            [{name:'上海'},{name:'温州'}],
                            [{name:'上海'},{name:'武汉'}],
                            [{name:'上海'},{name:'厦门'}],
                            [{name:'上海'},{name:'西宁'}],
                            [{name:'上海'},{name:'徐州'}],
                            [{name:'上海'},{name:'烟台'}],
                            [{name:'上海'},{name:'珠海'}],
                            [{name:'广州'},{name:'北海'}],
                            [{name:'广州'},{name:'郑州'}],
                            [{name:'广州'},{name:'长春'}],
                            [{name:'广州'},{name:'重庆'}],
                            [{name:'广州'},{name:'长沙'}],
                            [{name:'广州'},{name:'成都'}],
                            [{name:'广州'},{name:'常州'}],
                            [{name:'广州'},{name:'大连'}],
                            [{name:'广州'},{name:'福州'}],
                            [{name:'广州'},{name:'海口'}],
                            [{name:'广州'},{name:'呼和浩特'}],
                            [{name:'广州'},{name:'合肥'}],
                            [{name:'广州'},{name:'杭州'}],
                            [{name:'广州'},{name:'哈尔滨'}],
                            [{name:'广州'},{name:'舟山'}],
                            [{name:'广州'},{name:'银川'}],
                            [{name:'广州'},{name:'南昌'}],
                            [{name:'广州'},{name:'昆明'}],
                            [{name:'广州'},{name:'贵阳'}],
                            [{name:'广州'},{name:'兰州'}],
                            [{name:'广州'},{name:'拉萨'}],
                            [{name:'广州'},{name:'连云港'}],
                            [{name:'广州'},{name:'临沂'}],
                            [{name:'广州'},{name:'柳州'}],
                            [{name:'广州'},{name:'宁波'}],
                            [{name:'广州'},{name:'南京'}],
                            [{name:'广州'},{name:'南宁'}],
                            [{name:'广州'},{name:'南通'}],
                            [{name:'广州'},{name:'北京'}],
                            [{name:'广州'},{name:'上海'}],
                            [{name:'广州'},{name:'沈阳'}],
                            [{name:'广州'},{name:'西安'}],
                            [{name:'广州'},{name:'石家庄'}],
                            [{name:'广州'},{name:'汕头'}],
                            [{name:'广州'},{name:'青岛'}],
                            [{name:'广州'},{name:'济南'}],
                            [{name:'广州'},{name:'天津'}],
                            [{name:'广州'},{name:'太原'}],
                            [{name:'广州'},{name:'乌鲁木齐'}],
                            [{name:'广州'},{name:'温州'}],
                            [{name:'广州'},{name:'武汉'}],
                            [{name:'广州'},{name:'无锡'}],
                            [{name:'广州'},{name:'厦门'}],
                            [{name:'广州'},{name:'西宁'}],
                            [{name:'广州'},{name:'徐州'}],
                            [{name:'广州'},{name:'烟台'}],
                            [{name:'广州'},{name:'盐城'}]
                        ]
                    }
                }
            ]
        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option);
    }
);
})();
