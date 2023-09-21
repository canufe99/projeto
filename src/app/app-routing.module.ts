import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './pages/elements/elements.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'elements',
    component : ElementsComponent
  },
  {
    path : 'elements/content/:elementId',
    component : ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
