$(document).ready(function(){
	$(".hov").mouseover(function(){
		$(this).css("opacity",1);
	});
	$(".hov").mouseout(function(){
		$(this).css("opacity",0.4);
	});
});