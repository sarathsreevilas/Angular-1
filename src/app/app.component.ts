import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'new-project';
  public Str=""
  ngOnInit(){

  }

  functionCalling(){

this.Str="Yeah I will"


  }

  function1Calling(){
    this.Str=" I will think about it"
    
    console.log("Ooi")
      }
    


}
