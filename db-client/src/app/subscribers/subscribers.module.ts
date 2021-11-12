import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubscribersRoutingModule } from './subscribers-routing.module'
import { SubscribersPageComponent } from './pages/subscribers-page/subscribers-page.component'
import { AppMaterialModule } from '../app.material.module'

@NgModule({
    declarations: [SubscribersPageComponent],
    imports: [CommonModule, SubscribersRoutingModule, AppMaterialModule],
})
export class SubscribersModule {}
