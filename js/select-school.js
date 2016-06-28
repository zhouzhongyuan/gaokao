
$('#total').html(schoolList.length);
var s = '';
$(schoolList).each(function(i,v){
    "use strict";
    if(v.isCS){
        s = s + '<div class="school">'+ v.schoolName;
        if(v.description){
            s +=  '【'+ v.description+'】';
        }
        if(v.url){
            s += '<a class="url" href="'+v.url+'">网址</a>';
        }
        s += '</div>';
    }
});
$('#school #list').html(s);
