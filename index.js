let button=document.querySelector('.button');
let inputvalue=document.querySelector('.inputValue')
let temp=document.querySelector('.temp')
let desc=document.querySelector('.desc')

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=efaa0ef4e4617e2cc756cdde92177d87`)
    .then(response =>response.json())
    .then(
        displayData
    )
    .catch(err=>alert('Wrong city name'));
})

const displayData=(weather)=>{
    temp.innerText=`${weather.main.temp}\u00B0C`
    desc.innerText=`${weather.weather[0].main}`
}