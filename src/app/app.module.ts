import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourneeListComponent } from './tournee-list/tournee-list.component';
import { TourneeaddComponent } from './tourneeadd/tourneeadd.component';
import { HttpClientModule } from '@angular/common/http';
import { CartoComponent } from './carto/carto.component';

@NgModule({
  declarations: [
    AppComponent,
    TourneeListComponent,
    TourneeaddComponent,
    CartoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
