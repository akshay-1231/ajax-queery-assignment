'use strict';

document.getElementById("btn").addEventListener("click",function(){
    var city =document.getElementById("i1").value;
    console.log(city);
    
    var XMLHttp =new XMLHttpRequest();
    XMLHttp.onreadystatechange=function(){
        if(XMLHttp.readyState ==4 && XMLHttp.status ==200){
            var res =JSON.parse(XMLHttp.responseText);
            if(res && res.current){
                var temperature=res.current.temperature;
                var wheatherDescription=res.current.weather_descriptions[0];
                var humidity=res.current.humidity;
                var windspeed=res.current.wind_speed;

                document.getElementById("weatherInformation").innerHTML=
               ` <h3>Weather in ${city}</h3><p>temperature : ${temperature}</p><p>description : ${wheatherDescription}</p>`
             

            }

            else {
                document.getElementById("weatherInformation").innerHTML="<P>wherather data is not avilable</p>";

            }
         } else if(XMLHttp.readyState ==4){

            console.log("Request failed with status:"+XMLHttp.status);
            document.getElementById("weatherInformation").innerHTML="<P>failed to fetch data</P>";

            }
        }
        
            XMLHttp.open("GET",`https://api.weatherstack.com/current?access_key=dc2031702a46efcf08d15565d32c4555&query=${city}`,true);

            XMLHttp.send();
    });
