$(document).ready(function(){
	$('.btn1').on('click',function(){
		$('.btn1').removeClass('ative_btn');
		$('.product_content1').removeClass('ative_product_content');
		$('.product_content1').eq($(this).index()).addClass('ative_product_content');
		$(this).addClass('ative_btn');
	})
	$('.bars').on('click' ,function(){
		$('.menu_min').slideDown(500);
		$('.times').css('display' , 'block');
		$('.bars').css('display' , 'none');
	})
	$('.times').on('click' ,function(){
		$('.menu_min').slideUp(500);
		$('.bars').css('display' , 'block');
		$('.times').css('display' , 'none');
	})
})