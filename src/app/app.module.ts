import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Mock: Comment or Remove it when a real server is ready to receive requests
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mocks/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BoardOrderComponent } from './modules/board-order/board-order.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MzCardModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    BoardOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Mock: Comment or Remove it when a real server is ready to receive requests
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false
      }
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
