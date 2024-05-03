class ninja {
  constructor(nombre, salud) {
    (this.nombre = nombre),
      (this.salud = salud),
      (this.velocidad = 3),
      (this.fuerza = 3);
  }

  sayname() {
    console.log(this.nombre);
  }
  showstats() {
    console.log(`Nombre: ${this.nombre}| Salud: ${this.salud}| Velocidad: ${this.velocidad}| Fuerza: ${this.fuerza}`);
  }
  drinkSake(){
    this.salud +=10;
  }
}


const ninja1 = new ninja("Ninjaman",20);

ninja1.sayname();
ninja1.showstats();
ninja1.drinkSake();
ninja1.showstats();
