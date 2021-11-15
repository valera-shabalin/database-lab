import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../../services/subscribers.service';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    fio: string;
}

interface ICitySelect {
    value: string;
    text: string;
}

@Component({
    selector: 'app-subscribers-page',
    templateUrl: './subscribers-page.component.html',
    styleUrls: ['./subscribers-page.component.css'],
})
export class SubscribersPageComponent implements OnInit {
    cities: ICitySelect[] = [
        {
            value: 'Томск',
            text: 'Томск',
        },
        {
            value: 'Новокузнецк',
            text: 'Новокузнецк',
        },
    ];

    selected: string = 'Томск';

    constructor(private readonly subsSrv: SubscribersService) {}

    ngOnInit(): void {
        this.subsSrv.getSubscribers(this.selected).subscribe();
    }
}
