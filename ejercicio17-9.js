var Persona = function(edad, nombre) {
    this.edad = edad;
    this.nombre = nombre;
}

var empresa = function(edad) {
    this.edadTope = edad;
}

var personasNoAptas = function() {
    var persona1 = new Persona(24, "Flor");
    var persona2 = new Persona(35, "Edu");
    var persona3 = new Persona(35, "Franco");
    
    var empresa1 = new empresa(60);
    
    var recursos = [persona1, persona2, persona3];

    var habilitados = recursos.filter(persona => persona.edad > empresa1.edadTope);
    console.log(habilitados.length);
}
