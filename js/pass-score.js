// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
xAxisData = [];
seriesData = [];
passScore.forEach(function(v){
    xAxisData.push(parseInt(v.year,10));
    seriesData.push(v.score);

});
console.log(xAxisData);
// 指定图表的配置项和数据
var option = {
    title: {
        type: 'category',
//            boundaryGap: false,
        text: '历年二本分数线'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['分数']
    },
    xAxis: {
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 分'
        }
    },
    series: [{
        name: '二本分数线',
        type: 'line',
        data: seriesData,
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
