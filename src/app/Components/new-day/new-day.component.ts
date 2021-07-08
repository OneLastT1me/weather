import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-day',
  templateUrl: './new-day.component.html',
  styleUrls: ['./new-day.component.scss']
})
export class NewDayComponent implements OnInit {

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

    // weather + hour

    // 00:00
    this.WeatherDate.temp_oneH = (this.WeatherDate.forecast.forecastday[0].hour[0].temp_c);
    this.WeatherDate.temp_imgPlusHourOneH = (this.WeatherDate.forecast.forecastday[0].hour[0].condition.icon)
    this.WeatherDate.temp_time = (this.WeatherDate.forecast.forecastday[0].hour[0].time)
    this.WeatherDate.temp_textPlusHourOneH = (this.WeatherDate.forecast.forecastday[0].hour[0].condition.text)

    //05:00
    this.WeatherDate.temp_fourH = (this.WeatherDate.forecast.forecastday[0].hour[5].temp_c);
    this.WeatherDate.temp_imgPlusHourfourH = (this.WeatherDate.forecast.forecastday[0].hour[5].condition.icon)
    this.WeatherDate.temp_timefour = (this.WeatherDate.forecast.forecastday[0].hour[5].time)
    this.WeatherDate.temp_textPlusHourfourH = (this.WeatherDate.forecast.forecastday[0].hour[5].condition.text)

    //10:00
    this.WeatherDate.temp_tenH = (this.WeatherDate.forecast.forecastday[0].hour[10].temp_c);
    this.WeatherDate.temp_imgPlusHourtenH = (this.WeatherDate.forecast.forecastday[0].hour[10].condition.icon)
    this.WeatherDate.temp_timeten = (this.WeatherDate.forecast.forecastday[0].hour[10].time)
    this.WeatherDate.temp_textPlusHourtenH = (this.WeatherDate.forecast.forecastday[0].hour[10].condition.text)


    //15:00
    this.WeatherDate.temp_fifteenH = (this.WeatherDate.forecast.forecastday[0].hour[15].temp_c);
    this.WeatherDate.temp_imgPlusHourfifteennH = (this.WeatherDate.forecast.forecastday[0].hour[15].condition.icon)
    this.WeatherDate.temp_timefifteen = (this.WeatherDate.forecast.forecastday[0].hour[10].time)
    this.WeatherDate.temp_textPlusHourfifteenH = (this.WeatherDate.forecast.forecastday[0].hour[15].condition.text)

    //20:00
    this.WeatherDate.temp_twentyH = (this.WeatherDate.forecast.forecastday[0].hour[20].temp_c);
    this.WeatherDate.temp_imgPlusHourtwentyH = (this.WeatherDate.forecast.forecastday[0].hour[20].condition.icon)
    this.WeatherDate.temp_timetwenty = (this.WeatherDate.forecast.forecastday[0].hour[20].time)
    this.WeatherDate.temp_textPlusHourtwentyH = (this.WeatherDate.forecast.forecastday[0].hour[20].condition.text)

    //day + 1
    this.WeatherDate.temp_twoDay = (this.WeatherDate.forecast.forecastday[1].day.avgtemp_c);
    this.WeatherDate.temp_imgtwoDay = (this.WeatherDate.forecast.forecastday[1].day.condition.icon);
    this.WeatherDate.temp_TexttwoDay = (this.WeatherDate.forecast.forecastday[1].day.condition.text);
    this.WeatherDate.temp_DatetwoDay = (this.WeatherDate.forecast.forecastday[1].date);

    //day + 2
    this.WeatherDate.temp_twoDay2 = (this.WeatherDate.forecast.forecastday[2].day.avgtemp_c);
    this.WeatherDate.temp_imgtwoDay2 = (this.WeatherDate.forecast.forecastday[2].day.condition.icon);
    this.WeatherDate.temp_TexttwoDay2 = (this.WeatherDate.forecast.forecastday[2].day.condition.text);
    this.WeatherDate.temp_DatetwoDay2 = (this.WeatherDate.forecast.forecastday[2].date);

  }


 

}

