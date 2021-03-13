import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {StoreComponent} from './store/store.component';
import { counterReducer} from "./store/counter.reducer";
import { MyCounterComponent } from './store/my-counter/my-counter.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({ count: counterReducer })
    StoreModule.forRoot({count: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
