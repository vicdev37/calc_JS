let num1 = document.getElementById('n1'),
	num2 = document.getElementById('n2'),
	plus = document.getElementById('plus'),
	minus = document.getElementById('minus'),
	out = document.getElementById('out');


plus.addEventListener('click', function () {
	let result = +num1.value + +num2.value;
	out.innerHTML = result;
	
});	

minus.addEventListener('click', function () {
	let result = +num1.value - +num2.value;
	out.innerHTML = result;

});