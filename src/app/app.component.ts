import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'new-project';
  public count=0
  evenOrodd= "Even"
  ngOnInit(){

  }

  increment(){
    // this.count=this.count+1
    this.count+=1
    if (this.count % 2 == 0){
      this.evenOrodd="Even"
    }
    else{
      this.evenOrodd="Odd"
    }

  }

  decrement(){

    // this.count=this.count-1
    this.count-=1
    if (this.count % 2 == 0){
      this.evenOrodd="Even"
    }
    else{
      this.evenOrodd="Odd"
    }


  }

 

}
