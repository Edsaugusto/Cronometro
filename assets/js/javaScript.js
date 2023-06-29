function padrao() {
    let form = document.querySelector('form');
    let resultado = document.querySelector('#resultado');

    function recebeEvento(e) {
        e.preventDefault();

        let pessoaPeso = document.querySelector('#input-Peso');
        let pessoaAltura = document.querySelector('#input-Altura');

        function calculaIMC(peso, altura) {
            var peso;
            var altura;
            let calcImc;
            calcImc = peso / (altura * altura);

            return calcImc;
        }
        if (calculaIMC(pessoaPeso.value, pessoaAltura.value) < 18.5) {
            resultado.innerHTML = '<p> abaixo do peso  </p>';
        } else if (calculaIMC(pessoaPeso.value, pessoaAltura.value) >= 18.5 && calculaIMC(pessoaPeso.value, pessoaAltura.value) <= 24.9) {
            resultado.innerHTML = '<p> peso Normal  </p>';
        } else if (calculaIMC(pessoaPeso.value, pessoaAltura.value) >= 25 && calculaIMC(pessoaPeso.value, pessoaAltura.value) <= 29.9) {
            resultado.innerHTML = '<p> sobrepeso </p>';
        } else if (calculaIMC(pessoaPeso.value, pessoaAltura.value) >= 30 && calculaIMC(pessoaPeso.value, pessoaAltura.value) <= 34.9) {
            resultado.innerHTML = '<p> Obesidade grau 1</p>';
        } else if (calculaIMC(pessoaPeso.value, pessoaAltura.value) >= 35 && calculaIMC(pessoaPeso.value, pessoaAltura.value) <= 39.9) {
            resultado.innerHTML = '<p> Obesidade grau 2</p>';
        } else {
            resultado.innerHTML = '<p> Obesidade grau 3</p>';
        }
        

        alert('formulado enviado. clique em ok pra ver o resultado')
    }
    form.addEventListener('submit', recebeEvento)

}
padrao()
