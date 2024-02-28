const BOTON = document.getElementById("calcular");
const INPUT = document.getElementById("peso");
const OUTPUT = document.getElementById("resultado");

function calculadora(peso) {
  if (peso >= 30) {
    let superficieCorporal = (peso * 4 + 7) / (peso + 90);
    let resultado = {
      resultado1: superficieCorporal * 1500,
      resultado2: superficieCorporal * 2000,
      resultado3: false,
    };
    return resultado;
  } else {
    let vd = 0;
    let mantenimiento = 0;
    let medio = 0;
    if (peso <= 10) {
      vd = peso * 100;
    } else if (peso <= 20) {
      vd = 1000 + (peso - 10) * 50;
    } else {
      vd = 1500 + (peso - 20) * 20;
    }
    mantenimiento = vd / 24;
    medio = mantenimiento * 1.5;
    let resultado = {
      resultado1: vd,
      resultado2: mantenimiento,
      resultado3: medio,
    };
    return resultado;
  }
}

INPUT.addEventListener("click", () => {
  INPUT.value = "";
  OUTPUT.style.display = "none";
});

BOTON.addEventListener("click", () => {
  let peso = Number(INPUT.value);
  if (peso > 0) {
    let resultado = calculadora(peso);
    if (peso >= 30) {
      OUTPUT.innerHTML = `<p> superficie corporal * 1000 = ${resultado.resultado1.toFixed(
        1
      )}</p>`;
      OUTPUT.innerHTML += `<p> superficie corporal * 1500 = ${resultado.resultado2.toFixed(
        1
      )}</p>`;
      OUTPUT.style.display = "block";
    } else {
      OUTPUT.innerHTML = `<p> volumen diario = ${resultado.resultado1.toFixed(
        1
      )}</p>`;
      OUTPUT.innerHTML += `<p> mantenimiento = ${resultado.resultado2.toFixed(
        1
      )}</p>`;
      OUTPUT.innerHTML += `<p> medio = ${resultado.resultado3.toFixed(1)}</p>`;
      OUTPUT.style.display = "block";
    }
  } else {
    OUTPUT.style.display = "block";
    OUTPUT.innerHTML = `<p style="color: red;"> Ingrese un valor válido</p>`;
  }
});
