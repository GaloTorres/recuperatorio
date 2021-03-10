function mostrar() {

let nombre;
let carrera;
let sexo;
let cantMat;
let notaProm;
let edad;
let i=0;
let maxNotProm=0;
let nombMaxProm;
let alumnaMasJoven=0;
let nombMasJoven;
let contQuimica=0;
let contFisica=0;
let contSistemas=0;
let contEstudiantes=0;
let porcentajeQuimica;
let porcentajeFisica;
let porcentajeSistemas;
let mayorCantMat=0;
let nombMasMaterias;
let edadMasMaterias;


for ( i = 0; i < 500;i++) {
    nombre = prompt("Ingrese nombre: ");

    carrera = prompt("Ingrese carrera quimica/fisica/sisteamas: ").toLowerCase();
        while (!(carrera == "quimica" || carrera == "fisica" || carrera == "sisteamas")) {
            carrera = prompt("Error ingrese carrera quimica/ fisica/ sisteamas: ").toLowerCase();
        }
        sexo = prompt("Ingrese sexo (masculino - femenino - no binario): ").toLowerCase();
        while (!(sexo == "femenino" || sexo == "masculino" || sexo == "no binario")) {
            sexo = prompt("Error ingrese sexo (masculino - femenino - no binario): ").toLowerCase();
        }
        cantMat = parseInt(prompt("Ingrese cantidad de materias a cursar (maximo 5): "));
        while (cantMat <= 0 || cantMat > 5) {
            cantMat = parseInt(prompt("Error ingrese cantidad de materias a cursar (maximo 5): "));
        }
        notaProm = parseFloat(prompt("Ingrese nota promedio (maximo 10): "));
        while (notaProm < 0 || notaProm > 10) {
            notaProm = parseFloat(prompt("Error ingrese nota promedio (maximo 10): "));
        }
        edad = parseInt(prompt("Ingrese edad (minimo 18): "));
        while (edad <= 17) {
            edad = parseInt(prompt("Error ingrese edad (minimo 18): "));
        }
        if (carrera == "fisica") {
            if (notaProm > maxNotProm) {
                nombMaxProm = nombre;
                maxNotProm = notaProm;
            }
        }
        if(sexo=="femenino"){
            if(edad>alumnaMasJoven){
                alumnaMasJoven=edad;
                nombMasJoven=nombre;


            }

        }

        switch (carrera) {
            case "fisica":
                contFisica++;
                contEstudiantes++;
                
                break;
            case "quimica":
                contQuimica++;
                contEstudiantes++;
                break;
            default:contSistemas++;
            contEstudiantes++;
                break;
        }

        if (carrera == "quimica" || carrera == "sisteamas") {
            if (cantMat > mayorCantMat) {
                nombMasMaterias = nombre;
                edadMasMaterias = edad;
            }
        }



    porcentajeFisica=(contFisica*100)/contEstudiantes;
    porcentajeQuimica=(contQuimica*100)/contEstudiantes;
    porcentajeSistemas=(contSistemas*100)/contEstudiantes;











}
    console.log("a- El nombre del mejor promedio que estudian fisica es " + nombMaxProm);
    console.log("b- El nombre de la mujer mas joven es " + nombMasJoven);
    console.log("c1- El porcentaje de los alumnos que estudian fisica es de  " + porcentajeFisica +"%");
    console.log("c2- El porcentaje de los alumnos que estudian quimica es de  " + porcentajeQuimica +"%");
    console.log("c3- El porcentaje de los alumnos que estudian sistemas es de  " + porcentajeSistemas +"%");
    console.log("d- El nombre del estudiante que cursa mas materias exeptuando la carrera quimica es " + nombMasMaterias + " y tiene " + edadMasMaterias + " años");


}


