$(document).ready(function(){
	// firt = 1;
	// end = 4;
	// setInterval(function(){
	// 	$('.slide').removeClass('ative');
	// 	if (firt < end) {
	// 		for (var i = firt; i <= end; i++) {
	// 			$('.slide').eq(i).addClass('ative');
	// 		}
	// 	}
	// 	if (firt > end) {
	// 		for (var i = firt; i <= $('.slide').length - 1; i++) {
	// 			$('.slide').eq(i).addClass('ative');
	// 		}
	// 		for (var j = 0; j <= end; j++) {
	// 			$('.slide').eq(j).addClass('ative');
	// 		}
	// 	}
	// 	firt = firt + 1;
	// 	end = end +1;
	// 	if (end >  $('.slide').length -1 ) {
	// 		end=0
	// 		var node = document.getElementsByClassName('slide')[end]
	// 		$('.start_slide')[0].append(node.cloneNode(true))
	// 	}
		

	// 	if (firt < 4) {
	// 		$('.dots1').css('color' , '#265e46');
	// 		$('.dots2').css('color' , '#ccc');
	// 	}else 
	// 		{
	// 			$('.dots1').css('color' , '#ccc');
	// 			$('.dots2').css('color' , '#265e46')
	// 		}
	// },3000);

	$('.add').on('click',function(){
		$('.present').slideUp(500);
		$('.remove').removeClass('exchange');
		$('.add').removeClass('change');
		$(this).addClass('change');
		$('.add').removeClass('exchange');
		$('.remove').removeClass('change');
		$(this).next().addClass('exchange');
		$(this).parent().next().slideDown(500);
	})
	$('.remove').on('click',function(){
		$(this).addClass('change');
		$('.add').removeClass('change');
		$('.remove').removeClass('exchange');
		$(this).prev().addClass('exchange');
		$(this).parent().next().slideUp(500);
	})
	$('.bars').on('click',function(){
		$('.bars').css('display','none');
		$('.smail_menu').slideDown(500);
		$('.time').css('display' , 'block');
	})
	$('.time').on('click',function(){
		// $('.bars').removeClass('animate__rotateOut');
		$('.time').css('display','none');
		$('.smail_menu').slideUp(500);
		$('.bars').css('display' , 'block');
	})
})