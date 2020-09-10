import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { SearchComponent } from './components/search/search.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { HttpClientModule } from '@angular/common/http';
import { InteresesService } from './services/intereses.service';
import { OpinionesService } from './services/opiniones.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InteresesComponent,
    SearchComponent,
    OpinionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InteresesService,OpinionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
