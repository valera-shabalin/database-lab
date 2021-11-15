import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ISubscriber } from 'src/app/api/interfaces/subscriber';
import { SubscribersService } from '../../services/subscribers.service';

const EMPTY_DATA: ISubscriber[] = [
    {
        id: 0,
        fio: 'Шабалин Валерий Константинович',
        street: 'Ленина',
        house: 12,
    },
    {
        id: 1,
        fio: 'Иванов Иван Иванович',
        street: 'Крупинина',
        house: 8,
    },
];

@Component({
    selector: 'app-subs-table',
    templateUrl: './subs-table.component.html',
    styleUrls: ['./subs-table.component.css'],
})
export class SubsTableComponent implements OnInit, OnDestroy {
    subscribers?: ISubscriber[] = EMPTY_DATA;
    columns: string[] = ['id', 'fio', 'street', 'house'];

    private unsubscribe = new Subject();

    constructor(private readonly subsSrv: SubscribersService) {}

    ngOnInit(): void {
        this.subsSrv.subscribers
            .pipe(takeUntil(this.unsubscribe))
            .subscribe((subs: ISubscriber[] | undefined) => {
                this.subscribers = subs;
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
