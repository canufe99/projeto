import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataElements } from 'src/app/data/data-elements';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() contentPhoto:string = '';
  @Input() contentTitle:string = ''; 
  @Input() contentDescription:string  = ''; 

  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('elementId'))
    this.setElementToContent(this.id)
  }

  setElementToContent(id:string | null) {
    const result = dataElements.filter(article => article.id.toString() === id)[0];
    this.contentPhoto = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description
  }
}
