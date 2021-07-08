import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

  WeatherDate: any;
  constructor() { }

  ngOnInit(){
    this.WeatherDate = {
      main : {},
      isDay: true
    };
    this.getWeatherDate();
    console.log(this.WeatherDate);
    
    
  }

  getWeatherDate(){
    fetch('http://api.weatherapi.com/v1/forecast.json?key=df46fdb885b344f9993165751210707&q=Odesa&days=5&aqi=yes&alerts=yes')
    .then(response=>response.json())
    .then(data=>{this.setWeatherDate(data);})

 
  }

  setWeatherDate(date: any){
    this.WeatherDate = date;

    // main Weather
    this.WeatherDate.temp_celcius = (this.WeatherDate.current.temp_c);
    this.WeatherDate.temp_NameCity = (this.WeatherDate.location.name);
    this.WeatherDate.temp_country = (this.WeatherDate.location.country);
    this.WeatherDate.temp_icon = (this.WeatherDate.current.condition.icon);
    this.WeatherDate.temp_textname = (this.WeatherDate.current.condition.text);

    let mass = ['Partly cloudy', 'Patchy rain possible', '', 'Overcast', 'Rain', 'Sunny'] // не знаю какие еще есть на Openweather описания погоды .
    
    
    function backgr(Temp: any) {
      for(let i = 0 ; i<=mass.length; i++){
        if(Temp === (mass[0] || mass[2] || mass[3])){
          document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/cb/6d/2c/cb6d2c974f71580b964c1f931e8b2aa3.jpg)";
          document.body.style.backgroundAttachment = "fixed";
        }
        else if(Temp === (mass[4] || mass [1])){
          document.body.style.backgroundImage = "url(https://images.wallpaperscraft.ru/image/steklo_dozhd_makro_156473_1920x1080.jpg)";
          document.body.style.backgroundAttachment = "fixed";
        }
        else{
           document.body.style.backgroundImage = "url(https://torange.biz/photo/20/HD/sky-blue-clear-20213.jpg)";
          document.body.style.backgroundAttachment = "fixed";
        }
      }
    }

    backgr(this.WeatherDate.temp_textname);

    window.onscroll = function() {scroll()};
    const scroll = () => {
     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(scrollTop >= 900){
        backgr('Rain')   // сделал для проверки // this.WeatherDate.temp_DatetwoDay
      }
      if(scrollTop >=1700){
        backgr('Partly cloudy')   
      }
      if(scrollTop <=200){
        backgr(this.WeatherDate.temp_textname);
      }
    }
    
    
    // weather + hour
    this.WeatherDate.temp_oneH = (this.WeatherDate.forecast.forecastday[0].hour[0].temp_c);
    this.WeatherDate.temp_twoH = (this.WeatherDate.forecast.forecastday[0].hour[1].temp_c);
    this.WeatherDate.temp_threeH = (this.WeatherDate.forecast.forecastday[0].hour[2].temp_c);
    
    //Weather + day
    this.WeatherDate.temp_DatetwoDay = (this.WeatherDate.forecast.forecastday[1].date);
  }
}



