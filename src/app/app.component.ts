import { Component,OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'new-project';
  constructor(private getApi :ApiCallService){ }
 postArray=[]
  ngOnInit(){

  
this.getApi.getPost().subscribe((res) => {
  this.postArray=res

   console.log(this.postArray);
  
})
 
}
}
