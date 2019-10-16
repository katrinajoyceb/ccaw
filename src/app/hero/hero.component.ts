import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  headline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";


  constructor() { }

  ngOnInit() {
  }

}
