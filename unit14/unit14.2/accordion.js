$(document).ready(function(){
	$('.add').on('click',function(){
		$('.tab').removeClass('ative')
		// $('.icon').addClass('ative-icon');
		// $(this).removeClass('ative-icon');
		// $(this).parent().addClass('deative-icon');
		$(this).parent().parent().parent().toggleClass('ative');
	})
	
 })