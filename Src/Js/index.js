const minus = document.querySelector('.minus');
const totalProduct = document.querySelector('.total--product');
const plus = document.querySelector('.plus');

plus.addEventListener('click', () => {
	let producto = parseInt(totalProduct.textContent);
	if (producto <= 9 - 1) {
		let suma = (producto += 1);
		totalProduct.textContent = suma;
	}
});

minus.addEventListener('click', () => {
	let producto = parseInt(totalProduct.textContent);

	if (producto >= 1) {
		let resta = (producto -= 1);
		totalProduct.textContent = resta;
	}
});

const minusTwo = document.querySelector('.minus--two');
const totalProductTwo = document.querySelector('.total--product--two');
const plusTwo = document.querySelector('.plus--two');

plusTwo.addEventListener('click', () => {
	let producto = parseInt(totalProductTwo.textContent);
	if (producto <= 9 - 1) {
		let suma = (producto += 1);
		totalProductTwo.textContent = suma;
	}
});

minusTwo.addEventListener('click', () => {
	let producto = parseInt(totalProductTwo.textContent);

	if (producto >= 1) {
		let resta = (producto -= 1);
		totalProductTwo.textContent = resta;
	}
});
