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
    option.legend.data.push(schoolName)
    option.series.push(
        {
            name: schoolName,
            type: 'line',
            data: scoreData,
        });


}
myChart.setOption(option);


//var jsj = newBzxy.计算机网络技术;
//jsj = _.indexBy(jsj,'year');
//console.log(jsj);
//var bzxyScore = [];
//_.each(jsj,function(v,i){
//    "use strict";
//    console.log(v.year);
//    bzxyScore.push(v.score);
//});
//var deltaLength = 4 - bzxyScore.length;
//if(deltaLength){
//    for(var i=0;i<deltaLength;i++){
//        bzxyScore.unshift(0);
//    }
//}
//
//option.series.push(
//    {
//    name: '滨州学院',
//    type: 'line',
//    data: bzxyScore,
//    });
//
//myChart.setOption(option);
