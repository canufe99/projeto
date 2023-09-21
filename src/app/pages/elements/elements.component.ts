import { Component, OnInit } from '@angular/core';
import { dataElements } from 'src/app/data/data-elements';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  elements = dataElements;
  constructor() { }

  ngOnInit(): void {
  }

}
