class ninja {
  constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }

  sayname() {
    console.log(this.nombre);
  }
  showstats() {
    console.log(
      `Nombre: ${this.nombre}| Salud: ${this.salud}| Velocidad: ${this.velocidad}| Fuerza: ${this.fuerza}`
    );
  }
  drinkSake() {
    this.salud += 10;
  }
}

class sensei extends ninja {
  constructor(nombre) {
    super(nombre, 200, 10, 10);
    this.sabiduria = 10;
  }

  speakWisdom() {
    super.drinkSake();
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    );
  }
}

const AkiraSensei = new sensei("Sasami");

AkiraSensei.showstats();

AkiraSensei.speakWisdom();
AkiraSensei.showstats();