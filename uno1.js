// console.log("hola mundo");

// const Suma1(a, b) => {
//     return a+b;
// } 

// let suma1 = Suma1(5,8);
// console.log(suma1);

class Empleado{
    
    constructor(nombre, apellidoP, apellidoM, edad){
         this.nombre= nombre;
         this.apellidoP= apellidoP;
         this.apellidoM= apellidoM;
         this.edad= edad;

    }
    

    //Metodods
    calcularSueldo(dia,sueldo_dia){
        let quincena= console.log(`El sueldo  de esta quincena del empleado es de ${sueldo_dia*dia}`);
            quincena= (sueldo_dia*dia);

    
        let mes= console.log(`El sueldo  de este mes del empleado es de ${quincena*2}`);
            mes = quincena*2;
 
        let anio = console.log(`El sueldo  de esta año del empleado es de ${mes*12}`);

    }

    horarioEmpleado(hora, minutos, segundos){
        let hoy = new Date();
        let hora2 = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
        console.log(hora2);

        if(hora >= hoy.getHours()){
            // console.log("sigues trabajando");
            if ( minutos >= hoy.getMinutes()){
              if (segundos > hoy.getSeconds()){
                  console.log(`El empledo aun se encuentra  laborando  su hora de salida es ${hora} horas con ${minutos} minitus con ${segundos} segundos `);
              }else{
              console.log(`El empledo ya slaio del trabajo su hora de slaida es ${hora} horas con ${minutos} minitus con ${segundos} segundos `);
                    }
            }else{
            console.log(`El empledo ya salio del tranbajo su hora de slaida es ${hora} horas con ${minutos} minitus con ${segundos} segundos `);
                 }
        }else  {
            console.log(`El empledo ya salio del trabajo su hora de salida es ${hora} horas con ${minutos} minitus con ${segundos} segundos `);
               }    
    }
}

class Administrador extends Empleado{
      
    constructor(nombre, apellidoP, apellidoM, edad, ocupacion){
        super(nombre, apellidoP, apellidoM, edad);
        this.ocupacion = ocupacion;
   }
}

class Recursos_Humanos extends Empleado{
      
    constructor(nombre, apellidoP, apellidoM, edad, ocupacion){
        super(nombre, apellidoP, apellidoM, edad);
        this.ocupacion = ocupacion;
   }
}

class Programador extends Empleado{
      
    constructor(nombre, apellidoP, apellidoM, edad, ocupacion){
        super(nombre, apellidoP, apellidoM, edad);
        this.ocupacion = ocupacion;
   }
}

const Mauricio = new Programador("Muricio", "perez", "gonzales", 30,"programador");
console.log(Mauricio);
console.log(Mauricio.calcularSueldo(10,1500));
console.log(Mauricio.horarioEmpleado(18, 15, 59));

const Alejandro = new Administrador("Alejandro", "manzon", "plasta", 54, "daministrador")
console.log(Alejandro);

const Leti = new Recursos_Humanos("leti", "masuda", "glez", 26, "recursos hmanos");
console.log(Leti);