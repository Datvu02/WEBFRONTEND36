$(document).ready(function(){
	
	var stemp = 1; 
	$('#username').on('blur',function(){
		if ($('#username').val()== '') {
			$('#error_name').text('Vui lòng nhập tên');
		}else if ($('#username').val().length < 8)  {
			$('#error_name').text('Tên phải lớn hơn 8 ký tự');
		}else {
			$('#error_name').text('');
		}
	})
	function checkform1(){
		var check =true;
		if ($('#username').val()== '') {
			$('#error_name').text('Vui lòng nhập tên');
			 check =false;
		}else if ($('#username').val().length < 8)  {
			 check =false;
			$('#error_name').text('Tên phải lớn hơn 8 ký tự');
		}else {
			$('#error_name').text('');
		}
		if ($('#pas').val() == '') {
			 check =false;
			$('#error_pas').text('Vui lòng nhập mật khẩu');
		}else if ($('#pas').val().length < 6)  {
			 check =false;
			$('#error_pas').text('Mật khẩu phải lớn hơn 6 ký tự');
		}else {
			$('#error_pas').text('');
		}
		if ($('#confim').val() == '') {
			 check =false;
			$('#error_confim').text('Vui lòng xác nhận mật khẩu');
		}else if ($('#confim').val() != $('#pas').val())  {
			 check =false;
			$('#error_confim').text('Mật khẩu không khớp');
		}else {
			$('#error_confim').text('');
		}
		return check;
	}


	function validateEmail(email) {
    	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
	function checkform2(){
		var check =true;
		if ($('#first').val() == '') {
			$('#error_first').text('Vui lòng nhập họ đệm');
			 check =false;
		}else if ($('#first').val().length < 6)  {
			 check =false;
			$('#error_first').text('Họ đệm phải lớn hơn 6 ký tự');
		}else {
			$('#error_first').text('');
		}

		if ($('#last').val() == '') {
			$('#error_last').text('Vui lòng nhập họ đệm!!');
			 check =false;
		}else if ($('#last').val().length < 2)  {
			 check =false;
			$('#error_last').text('Họ đệm phải lớn hơn 2 ký tự!!');
		}else {
			$('#error_last').text('');
		}

		if ($('#mail').val().length == '')  {
			 check =false;
			$('#error_mail').text('Vui lòng nhập email!!');
		}else if (validateEmail($('#mail').val()) == false) {
			 check =false;
			$('#error_mail').text('Vui lòng nhập đúng định dạng email!!');
		}else {
			$('#error_mail').text('');
		}

		if ($('#age').val().length == '')  {
			 check =false;
			$('#error_age').text('Vui lòng nhập tuổi!!');
		}
		return check;
	}
	$('#pre').click(function(){
		if (stemp == 4 ) {
			stemp = 2;
			$('#next').removeClass('remove');
			$('#finish').removeClass('add');
			$('#tab4').removeClass('ative');
			$('#tab2').addClass('ative');
		}else if (stemp == 3) {
			stemp = 2;
			$('#tab3').removeClass('ative');
			$('#tab2').addClass('ative');
		}else if (stemp == 2) {
			stemp = 1;
			$('#tab2').removeClass('ative');
			$('#tab1').addClass('ative');
		}
	})
	$('#next').click(function(){
		if(stemp == 1 && checkform1() == true){
			stemp = 2;
			$('.tab').removeClass('ative');
			$('#tab2').addClass('ative');
		}else if (stemp == 2) {
			if(checkform2() == true){
			$('.tab').removeClass('ative');
			if ($('#age').val() < 18) {
				stemp = 3;
				$('#tab3').addClass('ative');
			}else {
				stemp = 4;
				$('#tab4').addClass('ative');
				$('#next').removeClass('add');
				$('#next').addClass('remove');
				$('#finish').addClass('add');
				}
			}
		}		
	})
	$('#finish').click(function(){
			alert(' Hoàn thành');
	})
})