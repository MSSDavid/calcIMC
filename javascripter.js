function calculadoraIMC() {
    var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;

    var resultado = (peso / (altura * altura));

    if (resultado < 18.5) {
        alert("Seu indice indica que você está abaixo do peso: " + resultado);
    } else if (resultado >= 18.5 && resultado < 24.9) {
        alert("Peso ideal! <3" + resultado)
    } else if (resultado >= 25 && resultado < 29.9) {
        alert("Você está a cara da gordura! </3" + resultado)
    } else if (resultado >= 30 && resultado < 39.9) {
        alert("Você está com OBESIDADE! *pretends to be chocked*" + resultado)
    } else if (resultado > 40) {
        alert("Você está maior que a Dona Redonda! *kaboom!*" + resultado)
    }
}