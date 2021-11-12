import { Injectable } from '@angular/core'
import { ApiSubscribersService } from 'src/app/api/services/api-subscribers.service'

@Injectable({
    providedIn: 'root',
})
export class SubscribersService {
    constructor(private readonly api: ApiSubscribersService) {}

    getSubscribers(): any {
        return this.api.getSubscribers()
    }
}
