function calcular() {
    let resistencia = document.getElementById('resistência_eletrica').value;
    let corrente = document.getElementById('corrente_eletrica').value;
    
    if (resistencia.trim() === '' || corrente.trim() === '') {
        alert('Preencha todos os campos!');
        return;
    }

    let volts = resistencia * corrente;

    document.getElementById('resultado').innerHTML = `Tensão: ${volts.toFixed(2)}V`;
}

