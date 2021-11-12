import { Component, OnInit } from '@angular/core'

export interface PeriodicElement {
    name: string
    position: number
    weight: number
    symbol: string
    fio: string
}

interface ICitySelect {
    value: string
    text: string
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        fio: 'Иванов Иван Иванович',
    },
    {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        fio: 'Иванов Иван Иванович',
    },
]

@Component({
    selector: 'app-subscribers-page',
    templateUrl: './subscribers-page.component.html',
    styleUrls: ['./subscribers-page.component.css'],
})
export class SubscribersPageComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'fio']
    dataSource = ELEMENT_DATA

    cities: ICitySelect[] = [
        {
            value: 'Томск',
            text: 'Томск',
        },
        {
            value: 'Новокузнецк',
            text: 'Новокузнецк',
        },
    ]

    selected: string = 'Томск'

    constructor() {}

    ngOnInit(): void {}
}
