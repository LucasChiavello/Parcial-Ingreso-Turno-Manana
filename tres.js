/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var iteraciones = true;
	var nombre;
	var lugar;
	var temporada;
	var cantidad;

	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var contadorMasElejido = 0;
	var lugarMasElejido;

	var banderaPasajeros = 0;
	var nombreMasPasajeros;
	var pasajerosMax;

	var contadorInvierno = 0;
	var acumuladorInvierno = 0;
	var promedioInvierno;


	while (iteraciones) {
		
		nombre = prompt("Ingrese el nombre");

		lugar = prompt("Ingrese el lugar 'bariloche', 'cataratas' o 'salta'");
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")) {
			lugar = prompt("Error.Ingrese el lugar 'bariloche', 'cataratas' o 'salta'");
		}

		temporada = prompt("Ingrese la temporada 'otoño', 'invierno', 'primavera' o 'verano'")
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "primavera" || temporada == "verano")) {
			temporada = prompt("Error. Ingrese la temporada 'otoño', 'invierno', 'primavera' o 'verano'")
		}

		cantidad = prompt("Ingrese la cantidad de pasajeros");
		cantidad = parseInt(cantidad);
		while (!(cantidad > 0)) {
			cantidad = prompt("Error. Ingrese la cantidad de pasajeros");
		}

		if (lugar == "bariloche") {
			contadorBariloche++;
		} else if (lugar == "cataratas") {
			contadorCataratas++;
		} else {
			contadorSalta++;
		}

		if (banderaPasajeros == 0) {
			nombreMasPasajeros = nombre;
			pasajerosMax = cantidad;
			banderaPasajeros++;
		} else if (cantidad > pasajerosMax) {
			nombreMasPasajeros = nombre;
			pasajerosMax = cantidad;
		}

		if (temporada == "invierno") {
			contadorInvierno++;
			acumuladorInvierno = acumuladorInvierno + cantidad;
		}

		iteraciones = confirm("Desea continuar?");
	}

	promedioInvierno = acumuladorInvierno / contadorInvierno;

	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		lugarMasElejido = "bariloche";
		contadorMasElejido++;
	} else if (contadorCataratas > contadorSalta) {
		lugarMasElejido = "cataratas";
		contadorMasElejido++;
	} else{
		lugarMasElejido = "salta";
		contadorMasElejido++;
	}

	if (contadorMasElejido != 0) {
		console.log("El lugar mas elejido es: "+lugarMasElejido);
	}

	console.log("El titular con mas pasajeros es: "+nombreMasPasajeros);
	
	if (contadorInvierno != 0) {
		console.log("El promedio de pasajeros que viajan en invierno es de: "+promedioInvierno);
	}
}
