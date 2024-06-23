import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityDetailPage } from './activity-detail/activity-detail.page';

@NgModule({
  declarations: [
                  AppComponent
                ],
  imports: [HttpClientModule,
            BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule
           ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
