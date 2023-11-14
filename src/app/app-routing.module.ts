import { animate, AnimationBuilder, query, stagger, style } from '@angular/animations';
import { Component, ElementRef, NgModule, OnInit, ɵComponentType } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OriginalComponent } from './simple/original-component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'simple',
    component: OriginalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
