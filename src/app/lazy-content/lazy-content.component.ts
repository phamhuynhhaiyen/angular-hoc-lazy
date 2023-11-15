import { Component, Input } from '@angular/core';


function ExtendComponent() {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      // customBackgroundColor: string = config.backgroundColor;

      constructor(...args: any[]) {
        super(...args);
        console.log(`Extended component created with background color: `);
      }
    };
  };
}


@Component({
  selector: 'app-lazy-content',
  templateUrl: './lazy-content.component.html',
  styleUrls: ['./lazy-content.component.scss']
})

@ExtendComponent()
export class LazyContentComponent {

  constructor() {
    
  }


}
