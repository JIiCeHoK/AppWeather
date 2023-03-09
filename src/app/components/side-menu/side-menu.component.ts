import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const mockData = [
    'Москва',
    'Санкт-Петербург',
    'Екатеринбург',
    'Владивосток',
]

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {
    @Output() selectedCity = new EventEmitter<string>();

    cities = mockData

    constructor() {
    }

    ngOnInit(): void {
        this.selectedCity.emit(this.cities[0])
    }

    onClick(city: string) {
        this.selectedCity.emit(city)
    }

}
