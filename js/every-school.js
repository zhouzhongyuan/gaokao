var bzxy = require('../json/bzxy.js');
var _ = require('underscore');
var Chart = require('../js/pass-score.js');
var everySchollScore = _.groupBy(bzxy,'school');

for(var i in everySchollScore){
    var schoolName = i;
    var school = everySchollScore[i];
    console.log(school);
    //year
    school = _.indexBy(school,'year');
    //get score array
    var scoreData = [];
    _.each(school,function(v,i){
        console.log(v.year);
        scoreData.push(v.score);
    });
    //补齐数组
    var deltaLength = 4 - scoreData.length;
    if(deltaLength){
        for(var i=0;i<deltaLength;i++){
            scoreData.unshift(0);
        }
    }
    //push
    Chart.option.legend.data.push(schoolName)
    Chart.option.series.push(
        {
            name: schoolName,
            type: 'line',
            data: scoreData,
        });
}
Chart.myChart.setOption(Chart.option);

