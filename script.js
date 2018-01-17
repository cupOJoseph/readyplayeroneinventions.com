
//COL HEIGHT
var maxHeight = 0;
$(".height").each(function(){
  maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
}).height(maxHeight);
