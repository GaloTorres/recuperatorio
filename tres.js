
	function mostrar() {


		let nombre;
		let cantidad;
		let marca;
		let seguir;
		let precio;
		let subtotal = 0;
		let importe;
		let descuento;
		let acumLamp = 0;
		let acumArgenLuz = 0;
		let contArgenLuz = 0;
		let acumIlumi = 0;
		let contIlumi = 0;
		let acumFelipe = 0;
		let contFelipe = 0;
		let promArgentina = 0;
		let promIluminati = 0;
		let promFelipe = 0;
		let marcaMasVentas;
	
		do {
			nombre = prompt("ingrese nombre:");
	
			cantidad = parseInt(prompt("ingrese cantidad:"));
			
	
			marca = prompt("Ingrese marca felipelamparas/argentinaluz/iluminatis): ").toLowerCase();
        	while (!(marca == "felipelamparas" || marca == "argentinaluz" || marca == "iluminatis")) {
            marca = prompt("Error Ingrese marca felipelamparas/argentinaluz/iluminatis: ").toLowerCase();
        }
			precio = parseInt(prompt("ingrese precio:"));
			while (isNaN(precio) || precio <= 0) {
				precio = parseInt(prompt("error, ingrese precio"));
			}
	
		
			importe = precio * cantidad;
			subtotal += importe;
			acumLamp += cantidad;
			if (marca == "felipelamparas") {
				acumFelipe += cantidad;
				contFelipe++;
			} else if (marca == "argentinaluz") {
				acumArgenLuz += cantidad;
				contArgenLuz++;
			} else {
				acumIlumi += cantidad;
				contIlumi++;
			}
	
			seguir = prompt("quiere ingresar otro cliente? s/n ");
		} while (seguir == "s");
	
		if (marca == "felipelamparas" && acumLamp > 5) {
			descuento = 0.1;
		} else if (marca == "argentinaluz" && acumLamp >= 3) {
			descuento = 0.05;
		} else {
			descuento = 0;
		}
		if (descuento != 0) {
		} else {
		}
		
		
		if (contArgenLuz != 0) {
			promArgentina = acumArgenLuz / contArgenLuz;
		}
		if (contIlumi != 0) {
			promIluminati = acumIlumi / contIlumi;
		}
		if (contFelipe != 0) {
			promFelipe = acumFelipe / contFelipe;
		}
		
		
		if (contArgenLuz > contFelipe && contArgenLuz > contIlumi) {
			marcaMasVentas = "argentinaluz";
		} else if (contFelipe >= contArgenLuz && contFelipe > contIlumi) {
			marcaMasVentas = "felipelamparas";
		} else {
			marcaMasVentas = "illuminatis";
		}
		console.log("A-La empresa recaudó $" + subtotal);
		console.log("B-En concepto de descuentos, la empresa perdio " + descuento);
		console.log("C1-el promedio de cantidad de lamparas vendidas de argentinaluz es " + promArgentina);
		console.log("C2-el promedio de cantidad de lamparas vendidas de illuminatis  es " + promIluminati);
		console.log("C3-el promedio de cantidad de lamparas vendidas de felipelamparas es " +promFelipe);
		console.log("D-La marca que mas ventas relizó fue " + marcaMasVentas);
	}
	
	
	

