import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'new-project';
 
public fruits=[
{"name":"orange", "price": 100},//item
{"name":"apple","price": 200},
{"name":"mango","price": 300},
{"name":"kiwi","price": 400},
{"name":"banana","price": 500},
{"name":"grapes","price": 600}

]


  ngOnInit(){

  }

 
 

}
