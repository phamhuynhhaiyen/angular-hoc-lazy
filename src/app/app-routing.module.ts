import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home1Component } from './home1.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'old',
    component: Home1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
