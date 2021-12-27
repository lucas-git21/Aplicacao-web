function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = -21.760823678465307;
        let long = -43.34834868952127;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=a686bdad68179367c8cfc01d99c00616`;
        fetchApi(url);

        console.log(lat)
        console.log(long)
    });
}

function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let tempInCelsius = ((5 / 9) * (data.main.temp - 32)).toFixed(1);
            city.innerHTML = `${data.name}`;
            temp.innerHTML = `${tempInCelsius} ºC`;

            let imagem = document.getElementById('pngTemp')

            if (tempInCelsius <= 17) {
                imagem.src = "img/congeladas.png"
            } else if (tempInCelsius <= 25) {
                imagem.src = "img/quente.png"
            } else {
                imagem.src = "img/muito-quente.png"
            }
        })
        .catch((err) => {
            city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
            temp.innerText = `-`;
        })
}

getUserPosition();