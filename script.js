
const campoNUM1 = document.getElementById("num1");
const campoNUM2 = document.getElementById("num2");
const botonSumar = document.getElementById("btn-sumar");
const elementoResultado = document.getElementById("Resultado");

function realizarSuma() {
    let valor1 = campoNUM1.value;
    let valor2 = campoNUM2.value;

    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    const sumaTotal = numero1 + numero2;

    elementoResultado.textContent = sumaTotal;

    console.log(`Sumando ${numero1} + ${numero2} = ${sumaTotal}`);
}

botonSumar.addEventListener("click", realizarSuma);