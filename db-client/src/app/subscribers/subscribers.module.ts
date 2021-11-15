import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubscribersRoutingModule } from './subscribers-routing.module'
import { SubscribersPageComponent } from './pages/subscribers-page/subscribers-page.component'
import { AppMaterialModule } from '../app.material.module';
import { SubsTableComponent } from './components/subs-table/subs-table.component'

@NgModule({
    declarations: [SubscribersPageComponent, SubsTableComponent],
    imports: [CommonModule, SubscribersRoutingModule, AppMaterialModule],
})
export class SubscribersModule {}
