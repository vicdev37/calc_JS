// let str = 'урок-3-был слишком легким';
// function newStr() {
//   str = str.charAt(0).toUpperCase() + str.substr(1).replace(/\-/g, ' ');
//   console.log(str);
// }

// newStr()

// str = 'легким';
// str = str.replace('им', 'о');

// document.write(str);



// function newArr() {
//   let arr = [20, 33, 1, 'Человек', 2, 3];
//   let sum = 0;
//   arr.splice(3,1);

//   for(let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//   }
//   let newArr = Math.sqrt(sum);

//   console.log(newArr);
// }
// newArr();

let btn = document.querySelector('.btn'),
	elem = document.querySelector('.box-blue');

function myAnimation() {
	let pos = 0;

	let id = setInterval(frame, 10);
	function frame () {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}	

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
	btns = document.getElementsByTagName('.button');

btnBlock.addEventListener('click', function (event) {
	if (event.target && event.target.matches('button.first')) {
		console.log('Hello!');
	}
})	
