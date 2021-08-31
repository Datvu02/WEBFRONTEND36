$(document).ready(function(){
	$('.jquery').on('click',function(){
		 $('.none').css('display' , 'none');
		 $(this).toggleClass('ative_jquery');
		 $(this).next().toggleClass('ative');
		 $(this).next().toggleClass('animate__fadeInDown');
	});
	$('#formDemo').validate({
		rules: {
			name: {
				required: true,
				minlength: 8
			},
			email: {
				required: true,
				email: true 	
			},
			number: {
				required: true,
				phone: true
			}
		},
		messages: {
			name: {
				required: "Vui lòng nhập họ tên",
				minlength: "Vui lòng nhập đầy đủ họ tên"
			},
			email: {
				required: "Vui lòng nhập email",
				email: "Email chưa đúng định dạng"
			},
			number: {
				required: "Vui lòng nhập số điện thoại",
				phone: "Số điện thoại chưa đúng định dạng"
			}
		}
	})
})