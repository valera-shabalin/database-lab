import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from './app.material.module'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SubscribersModule } from './subscribers/subscribers.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        SubscribersModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
