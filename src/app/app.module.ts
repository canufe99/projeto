import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { ElementComponent } from './components/element/element.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ElementComponent,
    ContentComponent,
    HomeComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
