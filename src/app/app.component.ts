import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'new-project';
  public title ='MAD WorlD'
  ngOnInit(){

  }

  data = {
    tech1 : 'Angular',
    tech2 : 'Node js',
    programminglang : 'JS'
  }
}
