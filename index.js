let temp = document.querySelectorAll('span')[0];
let con = document.querySelectorAll('span')[1];
let city = document.querySelectorAll('span')[2];
let wind = document.querySelectorAll('span')[3];
let cloud = document.querySelectorAll('span')[4];

let btn = document.querySelector('button');
let search = document.querySelector('input');
let body=document.querySelector('.body')

btn.addEventListener('click', whether);

async function whether() {
   try{
        let citys = search.value;

        let apikey = '0d85a49b24d945f1c5f8feb25f8ed00e';

        let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${apikey}&units=metric`;

        let res = await fetch(url);
        let data = await res.json();

        console.log(data);

         let temperature = data.main.temp;
        temp.innerHTML = data.main.temp + " °C";
        con.innerHTML = data.weather[0].main;
        city.innerHTML = data.name;
        wind.innerHTML = data.wind.speed + " m/s";
        cloud.innerHTML = data.clouds.all + " %";

        if(temperature<0){
            body.style.backgroundColor='#AEE2FF'
        }
        else if(temperature>0&&temperature<=10){
            body.style.backgroundColor='#74C0FC'
        }
        else if(temperature>10 && temperature<=20){
              body.style.backgroundColor='#95D5B2'
        }
         else if(temperature>20 && temperature<=30){
              body.style.backgroundColor='#FFE066'
        }
         else if(temperature>30 && temperature<=40){
              body.style.backgroundColor='#FF922B'
        }
         else if(temperature>40){
              body.style.backgroundColor='#FF6B6B'
        }

        

   }catch(error){
        console.log(error);
   }
}
