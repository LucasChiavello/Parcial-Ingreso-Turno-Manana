/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var iteraciones = true;
  var marca;
  var precio;
  var peso;
  var tipo;

  var acumuladorPeso = 0;

  var banderaCaro = 0;
  var marcaCaro;
  var precioCaro;
  var contadorCaro = 0;

  var banderaLiviano = 0;
  var marcaLiviano;
  var pesoLiviano;
  var contadorLiviano = 0;

  while (iteraciones) {
    
    marca = prompt("Ingrese la marca");

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    while (!(precio > 0)) {
      precio = prompt("Error. Ingrese el precio");
      precio = parseInt(precio);
    }

    peso = prompt("Ingrese el peso");
    peso = parseInt(peso);
    while (!(peso > 0)) {
      peso = prompt("Error.Ingrese el peso");
      peso = parseInt(peso);
    }

    acumuladorPeso = acumuladorPeso + peso;

    tipo = prompt("Ingrese el tipo de producto 'liquido' o 'solido' ");
    while (!(tipo == "liquido" || tipo == "solido")) {
      tipo = prompt("Error. Ingrese el tipo de producto 'liquido' o 'solido' ");
    }

    if (tipo == "liquido") {
      contadorCaro++;
      if (banderaCaro == 0) {
        marcaCaro = marca;
        precioCaro = precio;
        banderaCaro++
      } else if (precio > precioCaro) {
        marcaCaro = marca;
        precioCaro = precio;
      }
    } else {
      contadorLiviano++;
      if (banderaLiviano == 0) {
        pesoLiviano = peso;
        marcaLiviano = marca;
        banderaLiviano++;
      } else if (peso < pesoLiviano) {
        pesoLiviano = peso;
        marcaLiviano = marca;
      }
    }

    iteraciones = confirm("Desea continuar?");
  }

  console.log("El peso total de la compra es de: "+acumuladorPeso);

  if (contadorCaro != 0) {
    console.log("La marca del mas caro de los liquidos es: "+marcaCaro);
  }

  if (contadorLiviano != 0) {
    console.log("La marca del mas liviano de los solidos es: "+marcaLiviano);
  }
}
