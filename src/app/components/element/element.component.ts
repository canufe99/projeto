import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() elementId:string = '0'
  @Input() elementTitle:string = ''
  @Input() elementPhoto:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
