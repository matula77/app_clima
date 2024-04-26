// ingresamos la clave que genera la pagina de manera gratuita
let API_key='eb3a002c3b19ee0c73cd48d88d4576e6 '
let urlBase='https://api.openweathermap.org/data/2.5/weather'
let kelvin =273.15
//creamos una funcion para obtener el clima del lugar solicitado por el usuario  https://openweathermap.org/img/wn/10d@2x.png

document.getElementById("botonBusqueda").addEventListener('click',()=>{
    const ciudad=document.getElementById("ciudadEntrada").value
    if (ciudad){fectchDatosClima(ciudad)
    }
})
function fectchDatosClima(ciudad){
fetch(`${urlBase}?q=${ciudad}&appid=${API_key}`)
.then(data => data.json())
.then(data=>mostrarDatosClima(data))


}
function mostrarDatosClima(data){
    console.log(data);

    const divDatosClima=document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre=data.name
    const pais=data.sys.country
    const temperatura=data.main.temp
    const humedad=data.main.humidity
    const sensatermica =data.main.feels_like
    const descripcion=data.weather[0].description 
    const icono=data.weather[0].icon

    //agregamos los titulo sal div 
    
    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`${ciudadNombre} , ${pais}`   

    const ciudadTemperatura=document.createElement('p')
    ciudadTemperatura.textContent=`LA temperatura es${Math.floor(temperatura-kelvin)}°C`

    const ciudadHumedad=document.createElement('p')
    ciudadHumedad.textContent=`La humedad es:${humedad}%`

    const sensatermicaDiv= document.createElement('p');
    sensatermicaDiv.textContent=`La sensacion termica es:${Math.floor(sensatermica-kelvin)}ºC`

    const ciudadDescripcion=document.createElement('p')
    ciudadDescripcion.textContent=`La descripcion metereologica es:${descripcion}`

    const iconoInfo= document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`
    //agregar a el contenedor de datos climas
    
  divDatosClima.appendChild(ciudadTitulo)
  
  divDatosClima.appendChild(ciudadTemperatura)
  divDatosClima.appendChild(iconoInfo)
 
  divDatosClima.appendChild(ciudadHumedad)
 
  divDatosClima.appendChild(sensatermicaDiv)
  divDatosClima.appendChild(ciudadDescripcion)
  
}
//funcion para agregar el h1 entre la informacion de la ciudad y la humedad
