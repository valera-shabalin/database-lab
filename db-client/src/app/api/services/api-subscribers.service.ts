import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class ApiSubscribersService {
    constructor(private readonly http: HttpClient) {}

    getSubscribers(): Observable<any> {
        return this.http.get(``).pipe(
            catchError((res) => {
                // обработка ошибки (сделать интесептор в будущем)
                return res
            })
        )
    }
}
