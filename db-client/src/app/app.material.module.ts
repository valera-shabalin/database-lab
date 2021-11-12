import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'

const materialModules = [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
]

@NgModule({
    declarations: [],
    imports: [CommonModule, ...materialModules],
    exports: [...materialModules],
})
export class AppMaterialModule {}
