import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';

import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    SecureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
