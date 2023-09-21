import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myData } from 'src/app/data/my-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private id:string = '0';
  @Input()
  homePagePhoto: string = '';
  @Input()
  homePageTitle: string = '';
  @Input()
  homePageSubitle: string = '';
  @Input()
  homePageDescription: string = '';
  
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setValueToHome(this.id)
  }
  
  setValueToHome(id:string) {
    const data = myData.filter(article => article.id === this.id)[0];
    this.homePagePhoto = data.homePagePhoto;
    this.homePageTitle = data.homePageTitle;
    this.homePageSubitle = data.homePageSubitle;
    this.homePageDescription = data.homePageDescription;    
  }
}