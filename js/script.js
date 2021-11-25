let input1 = document.getElementById('data_reserva_1')
let input2 = document.getElementById('data_reserva_2')
let input3 = document.getElementById('data_reserva_3')

//botão "Pré-reserva"
function reserva() {
    input1 = document.getElementById('data_reserva_1')
    console.log(input1.value)

    input2 = document.getElementById('data_reserva_2')
    console.log(input2.value)

    input3 = document.getElementById('data_reserva_3')
    console.log(input3.value)

    alert('Pré-reserva feita')
}

//botão Consultar reservas
function consultar_reserva() {
    let resp = document.getElementById('reservas_feitas')
    let nomeUsuario = document.getElementById('usuario')
    let testandoUsuario = ''

    resp.innerHTML = `<h2>Minhas reservas</h2>`
    resp.innerHTML += `<h3>Usuário: ${nomeUsuario.value}</h3><br>`
    resp.innerHTML += `<h3>Churrascaria</h3> <h4>Data: ${input1.value}</h4><br>`
    resp.innerHTML += `<h3>Campo</h4> <h4>Data: ${input2.value}</h4><br>`
    resp.innerHTML += `<h3>Piscina</h3> <h4>Data: ${input3.value}</h4>`

    input1.value = ''
    input2.value = ''
    input3.value = ''
}