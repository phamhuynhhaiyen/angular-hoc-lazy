import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper-old',
  templateUrl: './lazy-wrapper-old.component.html',
  styleUrls: ['./lazy-wrapper-old.component.scss']
})
export class LazyWrapperOldComponent implements OnInit {

  @Input() type: 'lazy' | 'lazy1'

  ngOnInit(): void {
  }

}
