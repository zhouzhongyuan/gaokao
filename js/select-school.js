
$('#total').html(schoolList.length);
var s = '';
$(schoolList).each(function(i,v){
    "use strict";
    if(v.isCS){
        s = s + '<div>'+ v.schoolName+'</div>'
    }
});
$('#school #list').html(s);
