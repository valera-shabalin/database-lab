import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { SubscribersPageComponent } from './pages/subscribers-page/subscribers-page.component'

const routes: Routes = [
    {
        path: '',
        component: SubscribersPageComponent,
    },
]

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubscribersRoutingModule {}
