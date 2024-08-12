(() => {
	// (1)
	//Resolver sin la triple condicional dentro del if
	// includes? arrays?
	//Mal
	function isRedFruit(fruit: string): boolean {
		if (fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela') {
			return true;
		} else {
			return false;
		}
	}

	//Mejor
	function isRedFruit1(fruit: string): boolean {
		const redFruits = ['manzana', 'cereza', 'ciruela'];
		return redFruits.includes(fruit);
	}

	// (2)
	// Simplificar esta función
	// switch? Object literal? validar posibles colores
	// Mal
	function getFruitsByColor(color: string): string[] {
		if (color === 'red') {
			return ['manzana', 'fresa'];
		} else if (color === 'yellow') {
			return ['piña', 'banana'];
		} else if (color === 'purple') {
			return ['moras', 'uvas'];
		} else {
			throw Error('the color must be: red, yellow, purple');
		}
	}

	//Mejor
	type FruitColor = 'red' | 'yellow' | 'purple';
	function getFruitsByColor1(color: FruitColor): string[] {
		const fruitsByColor = {
			red: ['manzana', 'fresa'],
			yellow: ['piña', 'banana'],
			purple: ['moras', 'uvas'],
		};

		if (!Object.keys(fruitsByColor).includes(color)) {
			throw Error('the color must be: red, yellow, purple');
		}

		return fruitsByColor[color];
	}

	// (3)
	// Simplificar esta función
	//Mal
	let isFirstStepWorking = true;
	let isSecondStepWorking = true;
	let isThirdStepWorking = true;
	let isFourthStepWorking = true;

	function workingSteps() {
		if (isFirstStepWorking === true) {
			if (isSecondStepWorking === true) {
				if (isThirdStepWorking === true) {
					if (isFourthStepWorking === true) {
						return 'Working properly!';
					} else {
						return 'Fourth step broken.';
					}
				} else {
					return 'Third step broken.';
				}
			} else {
				return 'Second step broken.';
			}
		} else {
			return 'First step broken.';
		}
	}

	//Mejor
	let isFirstStepWorking1 = true;
	let isSecondStepWorking1 = true;
	let isThirdStepWorking1 = true;
	let isFourthStepWorking1 = true;

	function workingSteps1() {
		if (!isFirstStepWorking1) return 'First step broken.';
		if (!isSecondStepWorking1) return 'Second step broken.';
		if (!isThirdStepWorking1) return 'Third step broken.';
		if (!isFourthStepWorking1) return 'Fourth step broken.';
		return 'Working properly!';
	}

	// VALIDACIONES
	// isRedFruit
	console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
	console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
	//console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
