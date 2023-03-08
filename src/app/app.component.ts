import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'AppWeather';

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.get$().pipe().subscribe(result => console.log(result))
    }
}
