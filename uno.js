/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var iteraciones = 0;
	var nombre;
	var temperatura;
	var sexo;
	var edad;

	var contadorMasculino = 0;
	var contadorFemenino = 0;

	var acumuladorEdad = 0;
	var contadorEdad = 0;
	var promedioEdad;

	var banderaTemperatura = 0;
	var nombreTemperaturaMujer;
	var temperaturaMax;


	while (iteraciones < 5) {
		nombre = prompt("Ingrese el nombre");

		temperatura = prompt("Ingrese la temperatura");
		temperatura = parseInt(temperatura);
		while (!(temperatura > 0)) {
			temperatura = prompt("Error. Ingrese la temperatura");
			temperatura = parseInt(temperatura);
		}

		sexo = prompt("Ingrese el sexo 'f' o 'm'");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Error. Ingrese el sexo 'f' o 'm'");
		}

		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while (!(edad >= 0)) {
			edad = prompt("Ingrese la edad");
			edad = parseInt(edad);
		}

		acumuladorEdad = acumuladorEdad + edad;
		contadorEdad++;

		if (sexo == "f") {
			if (banderaTemperatura == 0) {
				nombreTemperaturaMujer = nombre;
				temperaturaMax = temperatura;
				banderaTemperatura++;
			} else if (temperatura > temperaturaMax) {
				nombreTemperaturaMujer = nombre;
				temperaturaMax = temperatura;
			}
			contadorFemenino++;
		} else {
			contadorMasculino++;
		}


		iteraciones++;
	}

	promedioEdad = acumuladorEdad / contadorEdad;

	console.log("La cantidad de Hombres ingresados es de: "+contadorMasculino);
	console.log("La cantidad de Mujeres ingresadas es de: "+contadorFemenino);
	console.log("La edad promedio es de: "+promedioEdad);
	if (contadorFemenino != 0) {
		console.log("La mujer con mas temperatura es: "+nombreTemperaturaMujer);
	}
}
