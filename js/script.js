//função que é chamada quando a página é recarregada, simulando um outro usuário entrando no site, com um número de identificação diferente
function id_usuario() {
    let id = document.getElementById('id-usuario')
    let numRandomico = Math.floor(Math.random() * 100 + 1)

    id.innerHTML = `ID do usuário: ${numRandomico}`
}

//botões "Pré-reserva"
//capturando o input do usuário, no caso a data que ele escolheu
//data de reserva para churrascaria
function reserva_churrasco() {
    input1 = document.getElementById('data_reserva_1')
    console.log(input1.value)

    //preciso acessar input2 e input 3 que estão em outras funções
    reserva_campo()
    reserva_piscina()
}

//data de reserva para campo
function reserva_campo() {
    input2 = document.getElementById('data_reserva_2')
    console.log(input2.value)

    reserva_churrasco()
    reserva_piscina()
}

//data de reserva para piscina
function reserva_piscina() {
    input3 = document.getElementById('data_reserva_3')
    console.log(input3.value)

    reserva_churrasco()
    reserva_campo()
}

//botão Consultar reservas
function consultar_reserva() {
    
    //criando uma variável e associando-a onde será exibida as respostas no HTML
    resp = document.getElementById('reservas_feitas')

    resp.innerHTML = `<h2>Minhas reservas</h2><br>`

    //condicional que diz que só será exibida a resposta para as reservas que tiveram datas escolhidas pelo usuário (não vazias)
    if (input1.value != '') {
        resp.innerHTML += `<h3>Churrascaria</h3> <h4>Data: ${input1.value}</h4><br>`
    }
    if (input2.value != '') {
        resp.innerHTML += `<h3>Campo</h4> <h4>Data: ${input2.value}</h4><br>`
    }
    if (input3.value != '') {
        resp.innerHTML += `<h3>Piscina</h3> <h4>Data: ${input3.value}</h4>`
    }
}