import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';

import { AppComponent } from './app.component';
import { BurstNetworkService } from './services/burst-network.service';
import { BurstUserService } from './services/burst-user.service';
import { BurstBlockService } from './services/burst-block.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HttpClientModule,
    JsonpModule,
    BrowserModule,
  ],
  providers: [BurstNetworkService, BurstUserService, BurstBlockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
