async function Leer() {

    const buscar = document.getElementById("buscar").value;
    const ciudad = document.getElementById("ciudad").value;
    const claveApi = '36120d40b9a052a2c79b616c2928765b';

    const options = {
        method: 'GET',
        headers: {
            'appid': claveApi,
        }
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}`, options)
    .then(resultado => resultado.json())
        .then(resultado=>{
            console.log(resultado);

            const {name, main={}} = resultado;
            
            console.log(name, main.temp);
            document.getElementById("lista").innerHTML='';

            const temperatura = main.temp - 273.15;

            document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <h1>Ciudad: ${name}</h1>
                    <h3>Temperatura: ${temperatura.toFixed(2)}°C</h3>
            </div>`;
      });
}
