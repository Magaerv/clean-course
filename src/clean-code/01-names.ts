(() => {
	// Ejemplo
	// Archivos a evaluar - files to evaluate
	// MAL
	const fs = [
		{ id: 1, f: false },
		{ id: 2, f: false },
		{ id: 3, f: true },
		{ id: 4, f: false },
		{ id: 5, f: false },
		{ id: 7, f: true },
	];

	// Archivos marcados para borrar - files to delete
	const arhivos = fs.map(f => f.f);

	//MEJOR
	const filesToEvaluate = [
		{ id: 1, flagged: false },
		{ id: 2, flagged: false },
		{ id: 3, flagged: true },
		{ id: 4, flagged: false },
		{ id: 5, flagged: false },
		{ id: 7, flagged: true },
	];

	// Archivos marcados para borrar - files to delete
	const filesToDelete = filesToEvaluate.map(file => file.flagged);

	/*--------------------------------------*/

	// Mal
	class AbstractUser {}
	class UserMixin {}
	class UserImplementation {}
	interface IUser {}

	// Mejor
	class User {}
	interface User {}

	/*--------------------------------------*/

	// Todo: Tarea

	// día de hoy - today
	const ddmmyyyy = new Date(); // mal
	const today = new Date();

	// días transcurridos - elapsed time in days
	const d: number = 23; // mal
	const elapsedTimeInDays: number = 23;

	// número de archivos en un directorio - number of files in directory
	const dir = 33; //mal
	const numberOfFilesInDirectory = 33;

	// primer nombre - first name
	const nombre = 'Fernando'; // mal (inglés)
	const firstName = 'Fernando';

	// primer apellido - last name
	const apellido = 'Herrera'; // mal
	const LastName = 'Herrera';

	// días desde la última modificación - days since modification
	const dsm = 12; // mal (no es pronunciable)
	const daysSinceLastUpdate = 12;

	// cantidad máxima de clases por estudiante - max classes per student
	const max = 6; // mal
	const maxClassesPerStudent = 6;
})();
