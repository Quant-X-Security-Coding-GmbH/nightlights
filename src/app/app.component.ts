import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLinkList = (window.innerWidth > 992) ? true : false;
  hideLinkList = function () {
    return (window.innerWidth < 992) ? false : true;
  }
  title = 'Nightlights';
}
