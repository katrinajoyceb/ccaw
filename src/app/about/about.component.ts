import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  condition: boolean = true;
  aboutus = 'Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.';  
  constructor() { }

  ngOnInit() {
  }

}
