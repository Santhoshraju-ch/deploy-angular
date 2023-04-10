import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
images=['../../assets/images/slider_1.png','../../assets/images/slider_2.png','../../assets/images/slider_3.png','../../assets/images/slider_4.png']
}
