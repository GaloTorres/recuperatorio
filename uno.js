
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let pregunta=1;
	let acumProgramador=0;
	let contProgramador=0;
	let acumAnalista=0;
	let acumQa=0;
	let contAnalista=0;
	let contQa=0;
	let promSueldProgram=0;
	let promSueldQa=0;
	let promSueldAnalista=0;
	let mayorSueldo;
	let flag=1;
	let sexMayorSueldo;
	let femMayorSueldo=0;
	let nombMujerMasSueldo;
	let contProgramNoBin=0;


do {
	nombre=prompt("Ingrese nombre")
	edad = parseInt(prompt("Ingrese edad (minimo 18): "));
        while (edad <= 17) {
            edad = parseInt(prompt("Error ingrese edad (minimo 18): "));
        }
		sexo = prompt("Ingrese sexo (F o M, NO BINARIO): ").toLowerCase();
        while (!(sexo == "f" || sexo == "m" || sexo=="no binario")) {
            sexo = prompt("Error ingrese sexo (F o M, NO BINARIO): ").toLowerCase();
        }
		puesto = prompt("Ingrese puesto de trabajo (programador-analista-qa): ").toLowerCase();
        while (!(puesto == "programador" || puesto == "analista" || puesto == "qa")) {
            puesto = prompt("Error Ingrese puesto de trabajo (programador-analista-Qa): ").toLowerCase();
        }
		sueldo = parseInt(prompt("Ingrese sueldo (minimo 15000 maximo 70000): "));
        while (sueldo < 15000 || sueldo > 70000) {
            sueldo = parseInt(prompt("Error ingrese sueldo (minimo 15000 maximo 70000): "));
        }
		switch (puesto) {
			case "analista":
				contAnalista++;
				acumAnalista=acumAnalista+sueldo;
				
				break;
			case "programador":
				contProgramador++;
				acumProgramador=acumProgramador+sueldo
		
			default: contQa++;
			acumQa=acumQa+sueldo;
				break;
		}
		pregunta=prompt("desea ingresar otro trabajador (S O N) ").toUpperCase();

		promSueldAnalista=acumAnalista/contAnalista;
		promSueldProgram=acumProgramador/contProgramador;
		promSueldQa=acumQa/contQa;
		if (flag || sueldo>mayorSueldo) {
			mayorSueldo=sueldo;
			sexMayorSueldo=sexo;
			flag=0;
		}
		if (sexo=="f" && sueldo>femMayorSueldo) {
			femMayorSueldo=sueldo;
			nombMujerMasSueldo=nombre;

			
		}
		if (puesto=="programador" && sexo=="NO BINARIO" && sueldo<55000 || sueldo>20000) {
			contProgramNoBin++;
			
		}

	
} while (pregunta=="S");


	console.log("a1-El promedio de sueldo para el puesto progamador es de $ "+ promSueldProgram);
	console.log("a2-El promedio de sueldo para el puesto analista es de $ "+ promSueldAnalista);
	console.log("a3-El promedio de sueldo para el puesto Qa es de $ "+promSueldQa);
	console.log("b-El sexo de la persona que tiene mayor sueldo es: "+sexMayorSueldo);
	console.log("c-El nombre de la mujer con las sueldo es: "+nombMujerMasSueldo);
	console.log("c-El nombre de la mujer con las sueldo es: "+nombMujerMasSueldo);
	console.log("d-La cantidad de programadores de sexo No binarios es: "+contProgramNoBin);
}
