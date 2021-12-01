//variáveis de escopo global necessárias
let input1 = document.getElementById('data_reserva_1')
let input2 = document.getElementById('data_reserva_2')
let input3 = document.getElementById('data_reserva_3')

//função que é chamada quando a página é recarregada, simulando um outro usuário entrando no site, com um número de identificação diferente
function id_usuario() {
    let id = document.getElementById('id-usuario')
    let numRandomico = Math.floor(Math.random() * 100 + 1)

    id.innerHTML = `ID do usuário: ${numRandomico}`
}

//dar resposta para cada reserva se a data de reserva for preenchida ou não
function respReserva(bool, reserva) {
    if (bool) {
        alert(`Pré-reserva ${reserva} feita`)
    } else {
        alert('Escolha uma data')
    }
}

//botões "Pré-reserva"
//capturando o input do usuário, no caso a data que ele escolheu
//data de reserva para churrascaria
function reserva_churrasco() {
    input1 = document.getElementById('data_reserva_1')
    console.log(input1.value)

    if (input1.value != '') {
        respReserva(true, 'da churrasqueira')
    }
    else {
        respReserva(false)
    }
}

//data de reserva para campo
function reserva_campo() {
    input2 = document.getElementById('data_reserva_2')
    console.log(input2.value)

    if (input2.value != '') {
        respReserva(true, 'do campo')
    }
    else {
        respReserva(false)
    }
}

//data de reserva para piscina
function reserva_piscina() {
    input3 = document.getElementById('data_reserva_3')
    console.log(input3.value)

    if (input3.value != '') {
        respReserva(true, 'da piscina')
    }
    else {
        respReserva(false)
    }
}

//botão Consultar reservas
function consultar_reserva() {
    //criando uma variável e associando-a onde será exibida as respostas no HTML
    resp = document.getElementById('reservas_feitas')

    resp.innerHTML = `<h2>Minhas reservas</h2><br>`

    //condicional que diz que só será exibida a resposta para as reservas que tiveram datas escolhidas pelo usuário (não nulas)
    if (input1 != null) {
        resp.innerHTML += `<h3>Churrascaria</h3> <h4>Data: ${input1.value}</h4><br>`
    }
    if (input2 != null) {
        resp.innerHTML += `<h3>Campo</h4> <h4>Data: ${input2.value}</h4><br>`
    }
    if (input3 != null) {
        resp.innerHTML += `<h3>Piscina</h3> <h4>Data: ${input3.value}</h4>`
    }
}