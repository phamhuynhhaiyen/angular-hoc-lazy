import { Attribute, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss']
})
export class LazyWrapperComponent  {
  @ViewChild('lazyContent', { read: ViewContainerRef, static: true }) lazyContentContainer: ViewContainerRef

  @Input() type: 'lazy' | 'lazy1'

  constructor(private cfr: ComponentFactoryResolver) {
  }

  async ngOnInit() {
    const lazyContentComponent = await import(`../${this.type}-content/${this.type}-content.component`)
    // console.log(lazyContentComponent['Lazy1ContentComponent'])
    const componentClassName = lazyContentComponent[`${this.capitalize(this.type)}ContentComponent`]
    const componentFactory = this.cfr.resolveComponentFactory(componentClassName)
    this.lazyContentContainer.createComponent(componentFactory)
  }


  private capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
  }

}
