import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated//None - no attribute for css=> css is global , Native - shadow dom
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type:string, name:string, content:string};
  constructor() { }

  ngOnInit() {
  }

}
