import { Component, Input } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';


function ExtendComponent(config: { backgroundColor: string }) {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      customBackgroundColor: string = config.backgroundColor;

      constructor(...args: any[]) {
        super(...args);
        console.log(`Extended component created with background color: ${this.customBackgroundColor}`);
      }
    };
  };
}


@Component({
  selector: 'app-lazy-content',
  templateUrl: './lazy-content.component.html',
  styleUrls: ['./lazy-content.component.scss']
})

@ExtendComponent({ backgroundColor: 'lightblue' })
export class LazyContentComponent extends BaseContentComponent {

  constructor() {
    super()
  }

  onLazyWrapperClick() {
    console.log('a click from wrapper invoked a method on lazy-content.component')
  }

}
