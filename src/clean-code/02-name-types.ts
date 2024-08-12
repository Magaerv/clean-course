(() => {
	// arreglo de temperaturas celsius
	const arrayOfNums = [33.6, 12.34]; // Mal
	const celsiusTemperatures = [33.6, 12.34];

	// Dirección ip del servidor
	const ip = '123.123.123.123'; // mal
	const serverIp = '123.123.123.123';

	// Listado de usuarios
	const people = [
		{ id: 1, email: 'fernando@google.com' },
		{ id: 2, email: 'juan@google.com' },
		{ id: 3, email: 'melissa@google.com' },
	]; // mal

	const users = [
		{ id: 1, email: 'fernando@google.com' },
		{ id: 2, email: 'juan@google.com' },
		{ id: 3, email: 'melissa@google.com' },
	];

	// Listado de emails de los usuarios
	const emails = people.map(u => u.email); // mal
	const userEmails = users.map(user => user.email);

	// Variables booleanas de un video juego
	// MAL
	const jump = false;
	const run = true;
	const noTieneItems = true;
	const loading = false;

	//MEJOR
	const canJump = false;
	const canRun = true;
	const hasItems = false;
	const isLoading = false;

	// Otros ejercicios

	//MAL
	// tiempo inicial
	const start = new Date().getTime();
	// Tiempo al final
	const end = new Date().getTime() - start;

	//MEJOR
	// tiempo inicial
	const startTime = new Date().getTime();
	// Tiempo al final
	const endTime = new Date().getTime() - startTime;

	// Funciones
	// Obtiene los libros
	function book() {
		throw new Error('Function not implemented.');
	} //mal

	function getBooks() {
		throw new Error('Function not implemented.');
	}

	// obtiene libros desde un URL
	function BooksUrl(u: string) {
		throw new Error('Function not implemented.');
	} //mal

	function getBooksByUrl(url: string) {
		throw new Error('Function not implemented.');
	}

	// obtiene el área de un cuadrado basado en sus lados
	function areaCuadrado(s: number) {
		throw new Error('Function not implemented.');
	} //mal

	function getSquareArea(side: number) {
		throw new Error('Function not implemented.');
	}

	// imprime el trabajo
	function printJobIfJobIsActive() {
		throw new Error('Function not implemented.');
	} //mal

	function printJob() {
		throw new Error('Function not implemented.');
	}
})();
