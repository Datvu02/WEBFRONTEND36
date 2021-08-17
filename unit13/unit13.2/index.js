var registration = document.getElementById('registration');
var clear = document.getElementById('clear');

function addname() {
	if (document.getElementById('name').value.length <= 8) {
		document.getElementById('name').nextElementSibling.classList.add('ative-errol');
		return 0;
	}
	if (document.getElementById('name').value.length > 8) {
		document.getElementById('name').nextElementSibling.classList.remove('ative-errol');
		return 1;
	}
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function email() {
	if (validateEmail(document.getElementById('email').value) == false) {
		document.getElementById('email').nextElementSibling.classList.add('ative-errol');
		return 0 ;
	}
	if (validateEmail(document.getElementById('email').value) == true) {
		document.getElementById('email').nextElementSibling.classList.remove('ative-errol');
		return 1;
	}
}

function isVietnamesePhoneNumber(phonenumber) {
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phonenumber.match(phoneno)) {
    return true;
  }  
  else {  
    return false;
  }
}
function numberphone() {
	if (isVietnamesePhoneNumber(document.getElementById('phone').value) == false) {
		document.getElementById('phone').nextElementSibling.classList.add('ative-errol');
		return 0;
	}
	if (isVietnamesePhoneNumber(document.getElementById('phone').value) == true) {
		document.getElementById('phone').nextElementSibling.classList.remove('ative-errol');
		return 1;
	}
}

function password() {
	if (document.getElementById('pass').value.length ==0) {
		document.getElementById('pass').nextElementSibling.classList.add('ative-errol');
		return 0;
	}
	if (document.getElementById('pass').value.length > 0) {
		document.getElementById('pass').nextElementSibling.classList.remove('ative-errol');
		return 1;
	}
}

function Confirmpass() {
	if (document.getElementById('Confirmpass').value != document.getElementById('pass').value || document.getElementById('Confirmpass').value.length==0) {
		document.getElementById('Confirmpass').nextElementSibling.classList.add('ative-errol');
		return 0;
	}
	if (document.getElementById('Confirmpass').value == document.getElementById('pass').value) {
		document.getElementById('Confirmpass').nextElementSibling.classList.remove('ative-errol');
		return 1;
	}
}
registration.addEventListener('click',function() {
	
	
	
	
	
	if (addname() ==1 && email()==1 && numberphone()==1 && password()==1 && Confirmpass()==1) {
		alert('Đăng ký thành công');
	}else alert('Đăng ký không thành công')
	
})

clear.addEventListener('click',function() {
	document.getElementById('name').value='';
	var geners = document.getElementsByClassName('gener')
	for (var i = 0; i < geners.length; i++) {
		if(geners[i].checked == true){
			geners[i].checked = false;
		}
	}
	document.getElementById('email').value='';
	document.getElementById('phone').value='';
	document.getElementById('pass').value='';
	document.getElementById('Confirmpass').value='';
})