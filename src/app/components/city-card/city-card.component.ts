import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICityWeatherDTO, ITemperature, IWind } from '../../../interfaces/city-weather.dto';
import { ApiService } from '../../services/api.service';

interface ICityWeather {
    temp: ITemperature
    wind: IWind
}

@Component({
    selector: 'app-city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.less']
})
export class CityCardComponent implements OnInit, OnChanges {
    @Input() currentCity: string = '';
    data$: Observable<ICityWeather> = null;

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('currentCity' in changes) {
            this.data$ = this.api.getCity$(this.currentCity).pipe(
                map((city: ICityWeatherDTO) => {
                    const result: ICityWeather = {
                        temp: city.main,
                        wind: city.wind,
                    }
                    console.log(result);
                    return result;
                }))
        }
    }




}
