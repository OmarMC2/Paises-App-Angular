import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `li{
      cursor:pointer
    }
    .active{
      background-color:black;
      border-color:black;
    }`
  ]
})
export class SidebarComponent  {

  constructor() { }

  

}
