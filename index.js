var inputValue=document.querySelector('#city');
var btn=document.querySelector("#add");
var city=document.querySelector('#cityoutput');
var describe=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apikey="8c80af195a84c9821613854ce1212a3f";
function convertion(val)
{
return(val-273).toFixed(3);
}
btn.addEventListener('click',function()
{fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+'&appid='+apikey)
    //to fetch the data in the jason format.
   .then(res=>res.json())
   .then(data=>
    { console.log(data);
        var nameval=data['name']
        var descrip=data['weather'][0]['description']
        var temperature=data['main']['temp']
        var winds=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${convertion(temperature)}C</span>`
        description.innerHTML=`Sky Conditions:<span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span> ${winds}km/h<span>`

    })
    .catch(err=>alert('You Entered Wrong city name'))
});