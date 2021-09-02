$(document).ready(function(){
	$('.btn1').on('click',function(){
		$('.btn1').removeClass('ative_btn');
		$('.product_content1').removeClass('ative_product_content');
		$('.product_content1').eq($(this).index()).addClass('ative_product_content');
		$(this).addClass('ative_btn');
	})
})