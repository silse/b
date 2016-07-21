$('.show_all_classes').click(function() {
    $('.classes').addClass('all_classes');
    // $(this).find('em').text('收起')
    $(this).hide();
});


$('.nav-title li span').click(function() {
    $(this).addClass('active').parent().siblings('li').find('span').removeClass('active');
});




require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});


require(
    [
        // 'echarts',
        'bar',
        'pie',
        'line'
    ],

    function(ec) {



        // 柱状图
        var first_detail_bar = ec.init(document.getElementById('first_detail_bar'));
        var first_detail_bar_options = {

            // calculable : true,
            xAxis: [{
                type: 'category',
                splitLine: { show: false },
                data: ['王明明', '李小强']
            }],
            yAxis: [{
                type: 'value',
                splitLine: { show: false }
                // splitNumber: 10
            }],
            series: [{
                type: 'bar',
                data: [223, 128],
                barWidth: 32,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideTop',
                            // textStyle:{colo:'#FF5155'},
                            // 	color:'rgba(255,222,255,0.8)',
                            // 	areaStyle:{color:'green'}  
                            // 	color:'gray'
                        },
                        // barBorderColor: 'tomato',
                        color: '#7CC9B8',
                        // bgcolor:'#ccc'

                    }
                }
            }]
        };

        first_detail_bar.setOption(first_detail_bar_options);



        // 饼图
        var pie = ec.init(document.getElementById('second_detail_pie'));
        var labelTop = {
            normal: {
                label: {
                    // show : true,
                    position: 'center',
                    formatter: '{b}',
                    textStyle: {
                        // baseline : 'bottom'
                    }
                },
                labelLine: {
                    show: false
                }
            }
        };
        var labelFromatter = {
            normal: {
                color: '#6E7FDF',
                label: {
                    formatter: function(params) {
                        // return 100 - params.value + '%'
                        return params.value + '%'
                    },
                    textStyle: {
                        // baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {

            normal: {
                color: '#A6B0EB',
                label: {
                    show: true,
                    position: 'center',
                    textStyle: {
                        color: '#A6B0EB',
                        // fontFamily: "simsun",
                        fontSize: 18,
                    }
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };

        var radius = [40, 35];
        var pie_option = {
            series: [{
                type: 'pie',
                // center : ['30%', '30%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [{
                    name: 'other',
                    value: 80,
                    itemStyle: labelBottom
                }, {
                    name: '',
                    value: 10,
                    itemStyle: labelTop
                }]
            }]
        };

        pie.setOption(pie_option);




        // 折线图
        var line = ec.init(document.getElementById('third_detail_line'));
        var line_options = {
            calculable: false,
            xAxis: [{
                type: 'category',
                // boundaryGap: false,
                splitLine: { show: false },
                data: ['1月', '2月', '3月', '4月', '5月', '6月']
            }],
            yAxis: [{
                type: 'value',
                splitLine: { show: false },
                // min: 0,
                // max: 450,
                // splitNumber: 9,
                data: ['1', '2', '3', '4', '5', '6']
            }],
            grid: {
		        // x: 80,
		        // y: 60,
		        // x2: 80,
		        // y2: 60,
		        // width: {totalWidth} - x - x2,
		        // height: {totalHeight} - y - y2,
		        // backgroundColor: 'rgba(0,0,0,0)',
		        borderWidth: 0,
		        // borderColor: '#ccc'
		    },
            series: [{
                type: 'line',
                data: [220, 232, 301, 234, 390, 230],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'insideTop',
                            // textStyle:{colo:'#FF5155'},
                            // 	color:'rgba(255,222,255,0.8)',
                            // 	areaStyle:{color:'green'}  
                            // 	color:'gray'
                        },
                        /**/
                        // barBorderColor: 'tomato',
                        color: '#fff',
                        // bgcolor:'#ccc'

                    }
                }
            }]
        };

        line.setOption(line_options);


        // 折线图
        var fourth_detail_line_area = ec.init(document.getElementById('fourth_detail_line_area'));
        var area_options = {
            calculable: true,

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                splitLine: { show: false },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周六', '周日']
            }],

            yAxis: [{
                type: 'value',
                splitLine: { show: false }
            }],

            grid: {
		        // x: 80,
		        // y: 60,
		        // x2: 80,
		        // y2: 60,
		        // width: {totalWidth} - x - x2,
		        // height: {totalHeight} - y - y2,
		        // backgroundColor: 'rgba(0,0,0,0)',
		        borderWidth: 0,
		        // borderColor: '#ccc'
		    },
            series: [{
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            color: 'rgba(255,255,255,.5)',
                            borderWidth: 0
                        },
                        lineStyle: {
                            width: 0,
                            type: 'solid'
                        }

                    }
                },
                data: [110, 122, 221, 354, 260, 330, 210, 166, 66]
            }]
        };

        fourth_detail_line_area.setOption(area_options);



        // -----------------------------------------------
        // 折线图
        var line = ec.init(document.getElementById('line'));
        var line_options = {
            // calculable : true,
            // backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 0,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                splitLine: { show: false },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 450,
                splitNumber: 9,
                data: ['1', '2', '3', '4', '5', '6', '7']
            }],
            series: [{
                type: 'line',
                // smooth:true,
                data: [220, 232, 301, 234, 390, 230, 210],
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            color: 'rgba(205,242,255,.3)'
                        },
                        color: '#06b2f0',
                    }
                }
            }]
        };

        line.setOption(line_options);



        // 柱状图
        var bar = ec.init(document.getElementById('bar'));
        var bar_options = {

            // calculable : true,
            xAxis: [{
                type: 'category',
                splitLine: { show: false },
                data: ['王明明', '李小强', '张翠翠', '肖勇', '王学兵', '李鹏飞']
            }],
            yAxis: [{
                type: 'value',
                splitNumber: 10
            }],
            series: [

                {
                    // name: '降水量',
                    type: 'bar',
                    data: [12, 32, 54, 66, 87, 22],
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            /*label : {
                            	show: true, 
                            	position: 'insideTop',
                            	textStyle:{colo:'#FF5155'},
                            	color:'rgba(255,222,255,0.8)',
                            	areaStyle:{color:'green'}  
                            	color:'gray'
                            },*/
                            barBorderColor: 'tomato',
                            color: '#FF5155',
                            bgcolor: '#ccc'

                        }
                    }
                }
            ]
        };

        bar.setOption(bar_options);

    }


);
