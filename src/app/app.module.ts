import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/navbar/login/login.component';
import { RegisterComponent } from './pages/navbar/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LatestComponent } from './pages/player/latest/latest.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { GeneralComponent } from './pages/player/general/general.component';
import { PlayerComponent } from './pages/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LatestComponent,
    NavbarComponent,
    SearchComponent,
    PlayerComponent,
    GeneralComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
