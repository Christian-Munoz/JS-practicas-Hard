/**
 * Determinar si número es primo en JavaScript
 * 

 */
 const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

const numerosParaProbar = [1, 2, 50, 51, 3, 500, 7, 1311];

numerosParaProbar.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
});
/*
Salida:
¿1 es primo? false
¿2 es primo? true
¿50 es primo? false
¿51 es primo? false
¿3 es primo? true
¿500 es primo? false
¿7 es primo? true
¿1311 es primo? false
*/