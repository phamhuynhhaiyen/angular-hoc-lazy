import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: '<app-lazy-wrapper type="lazy1"></app-lazy-wrapper>'
})
export class HomeComponent{
    ngOnInit() {
        console.log(this,'After View INit Home')
    }
}