import { animate, AnimationBuilder, query, stagger, style } from '@angular/animations';
import { Component, NgModule, Input, Injector, ɵComponentType, ElementRef, Attribute } from '@angular/core';

// Original component
@Component({
  selector: 'app-page',
  template: `<app-lazy-content *ngIf="componentType === 'lazy'"></app-lazy-content>
  <app-lazy1-content *ngIf="componentType === 'lazy1'"></app-lazy1-content>`
})
export class PageComponent {
  componentType: 'lazy' | 'lazy1'

  constructor(@Attribute('type') private type: 'lazy' | 'lazy1') {
    this.componentType = type
  }

//   ngOnInit(){
//     console.log("Original Component")
//   }
//   ngAfterViewInit(){
//     console.log("hahha")
//   }
}