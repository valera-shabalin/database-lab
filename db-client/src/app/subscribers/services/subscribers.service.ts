import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISubscriber } from 'src/app/api/interfaces/subscriber';
import { ApiSubscribersService } from 'src/app/api/services/api-subscribers.service';

@Injectable({
    providedIn: 'root',
})
export class SubscribersService {
    get subscribers(): Observable<ISubscriber[] | undefined> {
        return this.subscribers$.asObservable();
    }

    private subscribers$ = new BehaviorSubject<ISubscriber[] | undefined>([]);

    constructor(private readonly api: ApiSubscribersService) {}

    getSubscribers(city: string): Observable<ISubscriber[] | undefined> {
        return this.api.getSubscribers(city).pipe(
            map((subs: ISubscriber[]) => {
                console.log(subs);
                subs.forEach((sub, index) => (sub.id = index));
                this.setSubscribers(subs);
                return subs;
            })
        );
    }

    setSubscribers(value: ISubscriber[] | undefined): void {
        this.subscribers$.next(value);
    }
}
