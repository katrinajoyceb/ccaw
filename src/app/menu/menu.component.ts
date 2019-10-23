import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  condition: boolean = true;
  public scrolling = false;
  private timeout: number;

  
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.scrolling = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.scrolling = false;
    }, 200);
  }


  constructor() { }

  ngOnInit() {
  }



}
