import {carro} from "./exercicio1";

enum MARCAS {
  TOYOTA = 'TOYOTA',
  VOLKSWAGEN = 'VOLKSWAGEN'
}

  const etios: carro = {
    marca: MARCAS.TOYOTA,
    capacidadeCombustivel: 40,
    posssuiFlex: true
  };

console.log(etios);