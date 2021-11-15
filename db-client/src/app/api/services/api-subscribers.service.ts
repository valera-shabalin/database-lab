import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISubscriber } from '../interfaces/subscriber';

// доделать метод для формирования url параметров (вынести в отдельный класс)

@Injectable({
    providedIn: 'root',
})
export class ApiSubscribersService {
    private api: string = environment.baseApi;

    constructor(private readonly http: HttpClient) {}

    getSubscribers(city: string): Observable<ISubscriber[]> {
        return this.http.get<ISubscriber[]>(
            `${this.api}/subscribers?city=${city}`
        );
    }
}
