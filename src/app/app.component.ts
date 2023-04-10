import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular!';


  //image1:string="../assets/Megha.jpg";

  //image2:string="../assets/megha-akash.jpg";

  city:string ="Mysore";
  x=1

  test(){
    return this.x;
  }

  isdisabled:boolean=true;

  updateCity(){
    this.city="Hyderanbd";
  }

  show =true;

  names=['ravi sir','puneeth anna','shiva anna']

   name="angular"

   salary=10000
}
