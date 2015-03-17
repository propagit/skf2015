// JavaScript Document
function initLadders(){
	var default_top = 135;
	var ladders_h = $('#side-ladder').height();
	var body_h = $(document.body).height();
	var correction = body_h - (default_top+ladders_h);
	
	//console.log('body - ' + body_h + ' - LH - ' + ladders_h);
	$('#side-ladder').css({'top': correction});		
}